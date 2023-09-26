import { createContext, useState } from "react";
import products from "./Products";
// import { categories } from "./Products";


const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    
    const getUniqueCategories = (products) => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        return uniqueCategories;
    }

    const [categories, setCategories] = useState(getUniqueCategories(products)); // Assuming getUniqueCategories is a function to extract unique categories

    const handleAddToWishlist = (product) => {
        setWishlist([...wishlist, product]);
    };

    const handleRemoveFromWishlist = (productId) => {
        setWishlist(wishlist.filter(product => product.id !== productId));
    };

    return (
        <AppContext.Provider value={{
            searchQuery,
            setSearchQuery,
            selectedCategory,
            setSelectedCategory,
            wishlist,
            handleAddToWishlist,
            handleRemoveFromWishlist,
            categories
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }