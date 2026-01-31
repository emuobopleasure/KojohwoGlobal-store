import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../context/appContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCloseCircle, IoTimeOutline } from 'react-icons/io5';
import { PiXCircleThin, PiClockThin } from "react-icons/pi";
import { BsTrash } from 'react-icons/bs';
import products from '../ProductsData';
import useSearchHistory from '../hooks/useSearchHistory';

const SearchForm = ({ formStyle, groupStyle, inputStyle, btnStyle }) => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false); // ✅ NEW: Track focus state
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const location = useLocation();
  
  const { 
    getSearchHistory, 
    addToSearchHistory, 
    clearSearchHistory, 
    removeFromSearchHistory 
  } = useSearchHistory();

  // Load search history when component mounts
  useEffect(() => {
    setSearchHistory(getSearchHistory());
  }, [getSearchHistory]);

  // ✅ NEW: Show history when input is cleared (while focused)
  useEffect(() => {
    if (searchQuery.trim() === '' && isFocused) {
      const history = getSearchHistory();
      setSearchHistory(history);
      setShowHistory(history.length > 0);
      setShowSuggestions(false);
    }
  }, [searchQuery, isFocused, getSearchHistory]);

  // Handle search suggestions
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 6);

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
    setShowHistory(false); // Hide history when showing suggestions
  }, [searchQuery]);

  const handleSuggestionClick = (value) => {
    setSearchQuery(value);
    setSuggestions([]);
    setShowSuggestions(false);
    setShowHistory(false);
    setActiveIndex(-1);
    
    // Save to history
    addToSearchHistory(value);
    
    navigate(`/products?search=${encodeURIComponent(value)}`);
  };

  const handleHistoryClick = (query) => {
    setSearchQuery(query);
    setShowHistory(false);
    setShowSuggestions(false);
    setActiveIndex(-1);
    
    // Save to history (moves to top)
    addToSearchHistory(query);
    
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  const handleRemoveHistoryItem = (e, query) => {
    e.stopPropagation();
    removeFromSearchHistory(query);
    setSearchHistory(getSearchHistory());
  };

  const handleClearHistory = () => {
    clearSearchHistory();
    setSearchHistory([]);
    setShowHistory(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setSuggestions([]);
      setShowSuggestions(false);
      setShowHistory(false);
      setActiveIndex(-1);
      
      // Save to history
      addToSearchHistory(searchQuery);
      
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleFocus = () => {
    setIsFocused(true); // ✅ NEW: Set focused state
    // Show history only if search is empty
    if (searchQuery.trim() === '') {
      const history = getSearchHistory();
      setSearchHistory(history);
      setShowHistory(history.length > 0);
    }
  };

  const handleBlur = () => {
    setIsFocused(false); // ✅ NEW: Clear focused state
    // Delay to allow clicks on suggestions/history
    setTimeout(() => {
      setShowSuggestions(false);
      setShowHistory(false);
    }, 200);
  };

  // Close suggestions/history when route changes
  useEffect(() => {
    setShowSuggestions(false);
    setShowHistory(false);
  }, [location]);

  const handleKeyDown = (e) => {
    const items = showSuggestions ? suggestions : showHistory ? searchHistory : [];
    if (items.length === 0) return;

    if (e.key === 'ArrowDown' || e.key === 'Tab') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % items.length);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? items.length - 1 : prev - 1
      );
    }

    if (e.key === 'Enter') {
      if (activeIndex >= 0) {
        e.preventDefault();
        if (showSuggestions && suggestions[activeIndex]) {
          handleSuggestionClick(suggestions[activeIndex].name);
        } else if (showHistory && searchHistory[activeIndex]) {
          handleHistoryClick(searchHistory[activeIndex].query);
        }
      }
    }

    if (e.key === 'Escape') {
      setShowSuggestions(false);
      setShowHistory(false);
      setActiveIndex(-1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative form my-5 flex justify-center ${formStyle}`}
    >
      <div className="form-control w-full relative">
        <div className={`input-group flex items-center border rounded-full ${groupStyle}`}>
          <input
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="Search products…"
            className={`input input-bordered rounded-full text-primary border-r-0 rounded-br-none rounded-tr-none w-full focus:border-accent ${inputStyle}`}
          />
          <button
            type="submit"
            className={`btn btn-square text-white bg-accent rounded-full border-none rounded-tl-none rounded-bl-none border-accent hover:bg-neutral ${btnStyle}`}
            aria-label="Search Button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Search History Dropdown */}
        {showHistory && searchHistory.length > 0 && (
          <div className="search-dropdown absolute top-full left-0 z-30 mt-1 w-full bg-base-100 border border-gray-300 rounded-[1.5rem] shadow-xl max-h-[300px] overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-[#e5e4e4]">
              <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <IoTimeOutline size="1.2rem" />
                Recent Searches
              </h3>
              <button
                onClick={handleClearHistory}
                className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                type="button"
              >
                <BsTrash size="0.9rem" />
                Clear
              </button>
            </div>

            {/* History Items */}
            <ul className="max-h-[300px] overflow-y-auto">
              {searchHistory.map((item, index) => (
                <li
                  key={index}
                  className={`px-4 py-4 text-sm text-gray-700 cursor-pointer border-gray-300 border-b-[0.1px] flex items-center justify-between group ${
                    activeIndex === index ? 'bg-[#e0e0e0]' : 'hover:bg-[#e0e0e0]'
                  }`}
                  onClick={() => handleHistoryClick(item.query)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <PiClockThin size="1.2rem" className="text-gray-500" />
                    <span>{item.query}</span>
                  </div>
                  <button
                    onClick={(e) => handleRemoveHistoryItem(e, item.query)}
                    className="text-gray-500"
                    aria-label="Remove from history"
                    type="button"
                  >
                    <PiXCircleThin size="1.2rem" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <ul className="search-dropdown absolute top-full left-0 z-30 mt-1 w-full bg-base-100 border border-gray-300 rounded-[1.5rem] shadow-xl max-h-[300px] overflow-auto">
            {suggestions.map((product, index) => (
              <li
                key={product.id}
                className={`px-4 py-4 text-sm text-gray-700 cursor-pointer border-gray-300 border-b-[0.1px] ${
                  activeIndex === index ? 'bg-[#e5e4e4]' : 'hover:bg-[#e5e4e4]'
                }`}
                onClick={() => handleSuggestionClick(product.name)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default SearchForm;