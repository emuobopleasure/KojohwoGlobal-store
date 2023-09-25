import { createContext, useState } from "react";


const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [wishlist, setWishlist] = useState([]);

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
            handleRemoveFromWishlist
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider}