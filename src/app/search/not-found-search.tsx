"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./search.module.css";
import { getPopularSearchTerms } from "../utils/searchUtils";
import { searchData } from "../utils/searchData";

interface NotFoundSearchProps {
  query: string;
}

const NotFoundSearch: React.FC<NotFoundSearchProps> = ({ query }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(query);
  const [suggestedSearches, setSuggestedSearches] = useState<string[]>([]);

  useEffect(() => {
    // Get popular search terms based on tag frequency
    const popularTerms = getPopularSearchTerms(searchData, 8);
    setSuggestedSearches(popularTerms);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue(""); // Clear the search input after submitting
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>
          {query
            ? `No results found for "${query}"`
            : "Please enter a search term"}
        </h1>

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

        <div className={styles.notFoundImage}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.searchIcon}
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 8V14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11H14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className={styles.notFoundDescription}>
          {query
            ? "We couldn't find any content matching your search. Try different keywords or check out our suggestions below."
            : "Enter a search term to find content across our site."}
        </p>

        <div className={styles.suggestionsContainer}>
          <h2 className={styles.suggestionsTitle}>Popular search terms:</h2>
          <div className={styles.suggestionTags}>
            {suggestedSearches.map((suggestion) => (
              <Link
                href={`/search?q=${encodeURIComponent(suggestion)}`}
                key={suggestion}
                className={styles.suggestionTag}
              >
                {suggestion}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.actionsContainer}>
          <button
            onClick={() => router.back()}
            className={styles.backButton}
          >
            Go Back
          </button>
          <Link href="/" className={styles.homeButton}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundSearch; 