/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import styles from "./SearchAutocomplete.module.css";
import { SearchItem } from "../utils/searchData";

interface SearchAutocompleteProps {
  suggestions: SearchItem[];
  onSelect: (suggestion: SearchItem) => void;
  visible: boolean;
}

const SearchAutocomplete = ({
  suggestions,
  onSelect,
  visible,
}: SearchAutocompleteProps) => {
  if (!visible || suggestions.length === 0) return null;

  return (
    <div className={styles.autocompleteContainer}>
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          className={styles.suggestionItem}
          onClick={() => onSelect(suggestion)}
        >
          <div className={styles.suggestionTitle}>{suggestion.title}</div>
          <div className={styles.suggestionCategory}>{suggestion.category}</div>
        </button>
      ))}
    </div>
  );
};

export default SearchAutocomplete;
