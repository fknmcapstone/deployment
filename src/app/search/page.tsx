"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchItems } from "../utils/searchUtils";
import { searchData, SearchItem } from "../utils/searchData";
import styles from "./search.module.css";
import NotFoundSearch from "./not-found-search";

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category");
  const pageParam = searchParams.get("page");
  
  const [searchValue, setSearchValue] = useState(query);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [hasResultsInAllCategories, setHasResultsInAllCategories] = useState(false);
  const [showEmptyResults, setShowEmptyResults] = useState(false);
  
  // Cache for search results to prevent flickering
  const resultsCache = useRef<{
    [key: string]: {
      items: SearchItem[];
      totalItems: number;
      totalPages: number;
    }
  }>({});
  
  const pageSize = 10;

  // Update search value when query changes
  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  // Get unique categories from search data
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(searchData.map(item => item.category)));
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    if (pageParam) {
      const page = parseInt(pageParam, 10);
      if (!isNaN(page) && page > 0) {
        setCurrentPage(page);
      }
    } else {
      setCurrentPage(1);
    }
  }, [pageParam]);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Function to get cache key
  const getCacheKey = (q: string, category: string | null, page: number) => {
    return `${q}|${category || 'all'}|${page}`;
  };

  // Preload results for all categories on initial load
  useEffect(() => {
    if (!query || initialLoadComplete) return;

    const preloadCategories = async () => {
      // Check if there are results in all categories first
      const allCategoriesSearchOptions = {
        query,
        categories: undefined,
        page: 1,
        pageSize: 1
      };
      
      const allCategoriesResult = searchItems(allCategoriesSearchOptions, searchData);
      const hasAllCategoriesResults = allCategoriesResult.totalItems > 0;
      setHasResultsInAllCategories(hasAllCategoriesResults);
      
      // First load the current view to show results quickly
      const currentCacheKey = getCacheKey(query, selectedCategory, currentPage);
      
      if (!resultsCache.current[currentCacheKey]) {
        const currentSearchOptions = {
          query,
          categories: selectedCategory ? [selectedCategory] : undefined,
          page: currentPage,
          pageSize
        };
        
        const currentSearchResult = searchItems(currentSearchOptions, searchData);
        
        resultsCache.current[currentCacheKey] = {
          items: currentSearchResult.items,
          totalItems: currentSearchResult.totalItems,
          totalPages: currentSearchResult.totalPages
        };
        
        setResults(currentSearchResult.items);
        setTotalItems(currentSearchResult.totalItems);
        setTotalPages(currentSearchResult.totalPages);
        
        // Check if we should show empty results message
        if (selectedCategory && currentSearchResult.items.length === 0 && hasAllCategoriesResults) {
          setShowEmptyResults(true);
        } else {
          setShowEmptyResults(false);
        }
        
        setLoading(false);
      }
      
      // Then preload results for all categories in the background
      const allCategoriesCacheKey = getCacheKey(query, null, 1);
      
      if (!resultsCache.current[allCategoriesCacheKey]) {
        const allCategoriesFullSearchOptions = {
          query,
          categories: undefined,
          page: 1,
          pageSize
        };
        
        const allCategoriesFullResult = searchItems(allCategoriesFullSearchOptions, searchData);
        
        resultsCache.current[allCategoriesCacheKey] = {
          items: allCategoriesFullResult.items,
          totalItems: allCategoriesFullResult.totalItems,
          totalPages: allCategoriesFullResult.totalPages
        };
      }
      
      // Preload first page of each category
      for (const category of categories) {
        const categoryCacheKey = getCacheKey(query, category, 1);
        
        if (!resultsCache.current[categoryCacheKey]) {
          const categorySearchOptions = {
            query,
            categories: [category],
            page: 1,
            pageSize
          };
          
          const categorySearchResult = searchItems(categorySearchOptions, searchData);
          
          resultsCache.current[categoryCacheKey] = {
            items: categorySearchResult.items,
            totalItems: categorySearchResult.totalItems,
            totalPages: categorySearchResult.totalPages
          };
        }
      }
      
      setInitialLoadComplete(true);
    };
    
    preloadCategories();
  }, [query, categories, selectedCategory, currentPage, initialLoadComplete]);

  // Handle page changes and other non-initial loads
  useEffect(() => {
    if (!query || !initialLoadComplete) return;
    
    const cacheKey = getCacheKey(query, selectedCategory, currentPage);
    
    // Check if we have cached results
    if (resultsCache.current[cacheKey]) {
      const cachedResult = resultsCache.current[cacheKey];
      setResults(cachedResult.items);
      setTotalItems(cachedResult.totalItems);
      setTotalPages(cachedResult.totalPages);
      
      // Check if we should show empty results message
      if (selectedCategory && cachedResult.items.length === 0 && hasResultsInAllCategories) {
        setShowEmptyResults(true);
      } else {
        setShowEmptyResults(false);
      }
      
      setLoading(false);
      return;
    }
    
    // If not in cache, fetch the results
    const searchOptions = {
      query,
      categories: selectedCategory ? [selectedCategory] : undefined,
      page: currentPage,
      pageSize
    };
    
    const searchResult = searchItems(searchOptions, searchData);
    
    // Cache the results
    resultsCache.current[cacheKey] = {
      items: searchResult.items,
      totalItems: searchResult.totalItems,
      totalPages: searchResult.totalPages
    };
    
    setResults(searchResult.items);
    setTotalItems(searchResult.totalItems);
    setTotalPages(searchResult.totalPages);
    
    // Check if we should show empty results message
    if (selectedCategory && searchResult.items.length === 0 && hasResultsInAllCategories) {
      setShowEmptyResults(true);
    } else {
      setShowEmptyResults(false);
    }
    
    setLoading(false);
  }, [query, selectedCategory, currentPage, initialLoadComplete, hasResultsInAllCategories]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Update URL with new search query
      const params = new URLSearchParams();
      params.set('q', searchValue.trim());
      if (selectedCategory) {
        params.set('category', selectedCategory);
      }
      window.history.pushState({}, '', `/search?${params.toString()}`);
      
      // Clear the cache when performing a new search
      resultsCache.current = {};
      setInitialLoadComplete(false);
      setShowEmptyResults(false);
      
      // Trigger a new search
      setLoading(true);
      
      // Clear the search input
      setSearchValue("");
      
      // Force a reload to ensure the search is performed with the new query
      window.location.href = `/search?${params.toString()}`;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryChange = (category: string | null) => {
    if (category === selectedCategory) return; // No change needed
    
    // Get results from cache without showing loading state
    const cacheKey = getCacheKey(query, category, 1); // Reset to page 1 when changing categories
    
    if (resultsCache.current[cacheKey]) {
      const cachedResult = resultsCache.current[cacheKey];
      setResults(cachedResult.items);
      setTotalItems(cachedResult.totalItems);
      setTotalPages(cachedResult.totalPages);
      
      // Check if we should show empty results message
      if (category && cachedResult.items.length === 0 && hasResultsInAllCategories) {
        setShowEmptyResults(true);
      } else {
        setShowEmptyResults(false);
      }
    }
    
    setSelectedCategory(category);
    setCurrentPage(1);
    
    // Update URL with new category parameter
    const params = new URLSearchParams();
    params.set('q', query);
    if (category) {
      params.set('category', category);
    }
    window.history.pushState({}, '', `/search?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    
    // Check if we have cached results for this page
    const cacheKey = getCacheKey(query, selectedCategory, page);
    
    if (resultsCache.current[cacheKey]) {
      const cachedResult = resultsCache.current[cacheKey];
      setResults(cachedResult.items);
      setTotalItems(cachedResult.totalItems);
      setTotalPages(cachedResult.totalPages);
    } else {
      // Only set loading if we don't have cached results
      setLoading(true);
    }
    
    setCurrentPage(page);
    
    // Update URL with new page parameter
    const params = new URLSearchParams();
    params.set('q', query);
    if (selectedCategory) {
      params.set('category', selectedCategory);
    }
    params.set('page', page.toString());
    window.history.pushState({}, '', `/search?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className={styles.searchContainer}>
        <h1 className={styles.searchTitle}>Searching for &quot;{query}&quot;</h1>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Searching...</p>
        </div>
      </div>
    );
  }

  // If no query, show the not found component
  if (!query) {
    return <NotFoundSearch query={query} />;
  }

  // If no results in any category, show the not found component
  if (results.length === 0 && !showEmptyResults) {
    return <NotFoundSearch query={query} />;
  }

  return (
    <div className={styles.searchContainer}>
      {/* Search form */}
      <div className={styles.searchFormContainer}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            className={styles.searchInput}
            aria-label="Search"
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
      
      <h1 className={styles.searchTitle}>
        Search Results for &quot;{query}&quot; {selectedCategory ? `in ${selectedCategory}` : ''} ({totalItems})
      </h1>
      
      {/* Category filter */}
      <div className={styles.filterContainer}>
        <div className={styles.categoryFilter}>
          <button 
            className={`${styles.categoryButton} ${!selectedCategory ? styles.active : ''}`}
            onClick={() => handleCategoryChange(null)}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {showEmptyResults ? (
        <div className={styles.noResultsInCategory}>
          <p>No results found in the category &quot;{selectedCategory}&quot;.</p>
          <p>Try searching in &quot;All Categories&quot; or try a different search term.</p>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          {results.map((result) => (
            <Link
              href={result.url}
              key={result.id}
              className={styles.resultCard}
            >
              <h2 className={styles.resultTitle}>{result.title}</h2>
              <p className={styles.resultCategory}>{result.category}</p>
              {result.description && (
                <p className={styles.resultDescription}>{result.description}</p>
              )}
              {result.tags && result.tags.length > 0 && (
                <div className={styles.tagsContainer}>
                  {result.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
      
      {/* Pagination - only show if there are results */}
      {totalPages > 1 && !showEmptyResults && (
        <div className={styles.pagination}>
          <button 
            className={styles.pageButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className={styles.pageButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

// Loading fallback component
const SearchLoading = () => {
  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.searchTitle}>Loading search results...</h1>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

// Main page component that wraps the client component with Suspense
const SearchPage = () => {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage; 