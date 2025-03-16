import { SearchItem } from "./searchData";

/**
 * Normalizes text for consistent comparison
 */
const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
};

/**
 * Calculates Levenshtein distance between two strings for fuzzy matching
 */
const levenshteinDistance = (a: string, b: string): number => {
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[b.length][a.length];
};

/**
 * Checks if a string fuzzy matches a term
 */
const fuzzyMatch = (text: string, term: string, threshold = 0.3): boolean => {
  if (text.includes(term)) return true;
  
  // For very short terms, require exact match
  if (term.length < 3) return text.includes(term);
  
  const distance = levenshteinDistance(text, term);
  const maxLength = Math.max(text.length, term.length);
  const similarity = 1 - distance / maxLength;
  
  return similarity >= threshold;
};

/**
 * Calculate relevance score for an item based on search terms
 */
const calculateRelevance = (item: SearchItem, searchTerms: string[]): number => {
  let score = 0;
  
  for (const term of searchTerms) {
    const normalizedTerm = normalizeText(term);
    
    // Title matches are most important
    if (normalizeText(item.title).includes(normalizedTerm)) {
      score += 10;
    } else if (fuzzyMatch(normalizeText(item.title), normalizedTerm)) {
      score += 5;
    }
    
    // Category matches
    if (normalizeText(item.category).includes(normalizedTerm)) {
      score += 3;
    }
    
    // Description matches
    if (item.description && normalizeText(item.description).includes(normalizedTerm)) {
      score += 2;
    }
    
    // Tag matches
    if (item.tags && item.tags.some(tag => normalizeText(tag).includes(normalizedTerm))) {
      score += 4;
    }
  }
  
  return score;
};

export interface SearchOptions {
  query: string;
  categories?: string[];
  page?: number;
  pageSize?: number;
}

export interface SearchResult {
  items: SearchItem[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

/**
 * Enhanced search function with filtering, scoring, and pagination
 */
export const searchItems = (
  options: SearchOptions,
  items: SearchItem[]
): SearchResult => {
  const { query, categories, page = 1, pageSize = 10 } = options;
  
  if (!query.trim() && (!categories || categories.length === 0)) {
    return { items: [], totalItems: 0, totalPages: 0, currentPage: page };
  }

  const searchTerms = query.toLowerCase().split(" ").filter(term => term.length > 0);
  
  // Filter items by search terms and categories
  let filteredItems = items.filter((item) => {
    // Filter by categories if provided
    if (categories && categories.length > 0) {
      if (!categories.includes(item.category)) {
        return false;
      }
    }
    
    // If no search terms, keep all items that passed category filter
    if (searchTerms.length === 0) return true;
    
    // Check if any search term matches
    return searchTerms.some((term) => {
      const normalizedTerm = normalizeText(term);
      return (
        normalizeText(item.title).includes(normalizedTerm) ||
        fuzzyMatch(normalizeText(item.title), normalizedTerm) ||
        normalizeText(item.category).includes(normalizedTerm) ||
        (item.description &&
          normalizeText(item.description).includes(normalizedTerm)) ||
        (item.tags &&
          item.tags.some((tag) =>
            normalizeText(tag).includes(normalizedTerm)
          ))
      );
    });
  });
  
  // Calculate relevance scores
  const scoredItems = filteredItems.map(item => ({
    item,
    score: calculateRelevance(item, searchTerms)
  }));
  
  // Sort by relevance score
  scoredItems.sort((a, b) => b.score - a.score);
  
  // Extract just the items
  filteredItems = scoredItems.map(scored => scored.item);
  
  // Apply pagination
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);
  
  return {
    items: paginatedItems,
    totalItems,
    totalPages,
    currentPage: page
  };
};

/**
 * Legacy search function for backward compatibility
 */
export const simpleSearchItems = (
  query: string,
  items: SearchItem[]
): SearchItem[] => {
  return searchItems({ query }, items).items;
};

/**
 * Get all available categories from the search data
 */
export const getCategories = (items: SearchItem[]): string[] => {
  const categories = new Set<string>();
  
  items.forEach(item => {
    categories.add(item.category);
  });
  
  return Array.from(categories).sort();
};

/**
 * Get popular search terms based on tags frequency
 */
export const getPopularSearchTerms = (items: SearchItem[], limit = 10): string[] => {
  const tagFrequency: Record<string, number> = {};
  
  // Count tag frequencies
  items.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => {
        tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
      });
    }
  });
  
  // Convert to array and sort by frequency
  const sortedTags = Object.entries(tagFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
    .slice(0, limit);
  
  return sortedTags;
};
