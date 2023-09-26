// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [categories, setCategories] = useState(getUniqueCategories(products)); // Assuming getUniqueCategories is a function to extract unique categories

  function getUniqueCategories(products) {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories;
  }

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist(wishlist.filter(product => product.id !== productId));
  };

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        wishlist,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        categories
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };


// ProductList.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext'; // Adjust the import path

const ProductList = () => {
  const { searchQuery, selectedCategory, setSelectedCategory, products, categories } = useContext(AppContext);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedCategory || product.category === selectedCategory)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        <li
          key="all"
          style={{ background: selectedCategory ? '' : 'lightblue' }}
          onClick={() => setSelectedCategory(null)}
        >
          All Categories
        </li>
        {categories.map(category => (
          <li
            key={category}
            style={{ background: selectedCategory === category ? 'lightblue' : '' }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

