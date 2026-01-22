import { useCallback } from 'react';

const RECENTLY_VIEWED_KEY = 'kojohwo_recently_viewed';
const MAX_RECENTLY_VIEWED = 12;
const EXPIRY_DAYS = 30;

const useRecentlyViewed = () => {
  // Get recently viewed products from localStorage
  const getRecentlyViewed = useCallback(() => {
    try {
      const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
      // console.log('📖 Reading from localStorage:', stored); // Debug
      
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      const now = Date.now();

      // Filter out expired products (older than 30 days)
      const valid = parsed.filter(item => {
        const age = now - item.timestamp;
        const daysOld = age / (1000 * 60 * 60 * 24);
        return daysOld < EXPIRY_DAYS;
      });

      // console.log('✅ Valid recently viewed items:', valid); // Debug
      return valid;
    } catch (error) {
      console.error('❌ Error reading recently viewed:', error);
      return [];
    }
  }, []);

  // Add product to recently viewed
  const addToRecentlyViewed = useCallback((productId) => {
    try {
      const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
      const recentlyViewed = stored ? JSON.parse(stored) : [];
      const now = Date.now();

      // Remove product if it already exists (to update timestamp)
      const filtered = recentlyViewed.filter(item => item.id !== productId);

      // Add product to the beginning of the array
      const updated = [
        { id: productId, timestamp: now },
        ...filtered
      ].slice(0, MAX_RECENTLY_VIEWED);

      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
      
      // console.log('💾 Added to recently viewed:', productId);
      // console.log('📝 Total items:', updated.length);
    } catch (error) {
      console.error('❌ Error adding to recently viewed:', error);
    }
  }, []);

  // Clear all recently viewed products
  const clearRecentlyViewed = useCallback(() => {
    try {
      localStorage.removeItem(RECENTLY_VIEWED_KEY);
      console.log('🗑️ Cleared recently viewed');
    } catch (error) {
      console.error('❌ Error clearing recently viewed:', error);
    }
  }, []);

  return {
    getRecentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed
  };
};

export default useRecentlyViewed;