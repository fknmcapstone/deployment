"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./SearchAndJump.module.css";
import { useRouter } from "next/navigation";
import { searchItems } from "../utils/searchUtils";
import { searchData, SearchItem } from "../utils/searchData";
import SearchAutocomplete from "./SearchAutocomplete";

const SearchAndJump = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const jumpContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
      if (
        jumpContainerRef.current &&
        !jumpContainerRef.current.contains(event.target as Node)
      ) {
        setShowJumpMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim()) {
      const searchResults = searchItems(value, searchData).slice(0, 5); // Limit to 5 suggestions
      setSuggestions(searchResults);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionSelect = (suggestion: SearchItem) => {
    router.push(suggestion.url);
    setSearchValue("");
    setShowSuggestions(false);
  };

  const jumpToOptions = [
    {
      label: "SFPs General Information",
      value: "/intake_visuals/SFPs_general_information/",
    },
    {
      label: "SFPs Food Breakdown",
      value: "/intake_visuals/SFPs_food_breakdown/",
    },
    {
      label: "Parents' Preferences",
      value: "/stakeholders_perception/parents_preferences/",
    },
    {
      label: "Parents' Opinions",
      value: "/stakeholders_perception/parents_opinions/",
    },
    {
      label: "Measurement Tool Assessment",
      value: "/measurement_tool_assessment/",
    },
    { label: "SFP Components", value: "/sfp_components/" },
    { label: "National Characteristics", value: "/national_characteristics/" },
    {
      label: "U of T School Food Study",
      value: "/ongoing_studies/uoft_school_food_study/",
    },
  ];

  const handleJumpTo = (value: string) => {
    if (value) {
      router.push(value);
      setShowJumpMenu(false);
    }
  };

  return (
    <div className={styles.searchJumpContainer}>
      <div ref={searchContainerRef} className={styles.searchContainer}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
            className={styles.searchInput}
            aria-label="Search"
          />
        </form>
        <SearchAutocomplete
          suggestions={suggestions}
          onSelect={handleSuggestionSelect}
          visible={showSuggestions}
        />
      </div>
      <div ref={jumpContainerRef} className={styles.jumpContainer}>
        <button
          className={styles.jumpButton}
          onClick={() => setShowJumpMenu(!showJumpMenu)}
          aria-expanded={showJumpMenu}
          aria-haspopup="true"
        >
          <span>Jump to...</span>
          <svg
            className={`${styles.jumpArrow} ${showJumpMenu ? styles.jumpArrowUp : ""}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {showJumpMenu && (
          <div className={styles.jumpMenu}>
            {jumpToOptions.map((item) => (
              <button
                key={item.value}
                className={styles.jumpMenuItem}
                onClick={() => handleJumpTo(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndJump;
