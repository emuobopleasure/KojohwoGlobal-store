import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../context/appContext';
import { useLocation, useNavigate } from 'react-router-dom';
import products from '../Products';

const SearchForm = ({ formStyle, groupStyle, inputStyle, btnStyle }) => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const location = useLocation()

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
      .slice(0, 6); // limit suggestions

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchQuery]);

  const handleSuggestionClick = (value) => {
    setSearchQuery(value);
    setSuggestions([]);
    setShowSuggestions(false);
    setActiveIndex(-1);
    navigate(`/products?search=${encodeURIComponent(value)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setSuggestions([]);
      setShowSuggestions(false);
      setActiveIndex(-1);
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Close suggestions when route changes
  useEffect(() => {
    setShowSuggestions(false);
  }, [location]);

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown' || e.key === 'Tab') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? suggestions.length - 1 : prev - 1
      );
    }

    if (e.key === 'Enter') {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        e.preventDefault();
        handleSuggestionClick(suggestions[activeIndex].name);
      }
    }

    if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveIndex(-1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative form my-5 flex justify-center ${formStyle}`}
    >
      <div className="form-control w-full relative">
        <div className={`input-group ${groupStyle}`}>
          <input
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="Search products…"
            className={`input input-bordered w-full focus:border-gray-400 ${inputStyle}`}
          />
          <button
            type="submit"
            className={`btn btn-square text-white bg-[#c95fa1] border-[#c95fa1] hover:bg-[#92075a] ${btnStyle}`}
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

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <ul className="drop-down mt-1 w-full bg-base-100 border border-gray-300 rounded-[1.5rem] shadow-xl max-h-[60vh] lg:max-h-[50vh] overflow-auto">
            {suggestions.map((product, index) => (
              <li
                key={product.id}
                className={`px-4 py-4 text-sm text-gray-700 cursor-pointer border-gray-300 border-b-[0.1px] ${activeIndex === index ? 'bg-base-200' : 'hover:bg-base-200'
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
