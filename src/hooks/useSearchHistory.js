import { useCallback } from 'react';

const SEARCH_HISTORY_KEY = 'kojohwo_search_history';
const MAX_HISTORY_ITEMS = 5;
const EXPIRY_DAYS = 30;

const useSearchHistory = () => {
  // Get search history from localStorage
  const getSearchHistory = useCallback(() => {
    try {
      const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      const now = Date.now();

      // Filter out expired items (older than 30 days)
      const valid = parsed.filter(item => {
        const age = now - item.timestamp;
        const daysOld = age / (1000 * 60 * 60 * 24);
        return daysOld < EXPIRY_DAYS;
      });

      return valid;
    } catch (error) {
      console.error('Error reading search history:', error);
      return [];
    }
  }, []);

  // Add search query to history
  const addToSearchHistory = useCallback((query) => {
    try {
      if (!query || query.trim().length < 2) return; // Don't save very short queries

      const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
      const searchHistory = stored ? JSON.parse(stored) : [];
      const now = Date.now();
      const trimmedQuery = query.trim();

      // Remove query if it already exists (to update timestamp and move to top)
      const filtered = searchHistory.filter(
        item => item.query.toLowerCase() !== trimmedQuery.toLowerCase()
      );

      // Add query to the beginning
      const updated = [
        { query: trimmedQuery, timestamp: now },
        ...filtered
      ].slice(0, MAX_HISTORY_ITEMS);

      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error adding to search history:', error);
    }
  }, []);

  // Clear all search history
  const clearSearchHistory = useCallback(() => {
    try {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  }, []);

  // Remove single item from history
  const removeFromSearchHistory = useCallback((query) => {
    try {
      const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (!stored) return;

      const searchHistory = JSON.parse(stored);
      const updated = searchHistory.filter(
        item => item.query.toLowerCase() !== query.toLowerCase()
      );

      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error removing from search history:', error);
    }
  }, []);

  return {
    getSearchHistory,
    addToSearchHistory,
    clearSearchHistory,
    removeFromSearchHistory
  };
};

export default useSearchHistory;