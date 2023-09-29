import { createContext, useEffect, useState } from "react";
import products from "./Products";
// import { categories } from "./Products";


const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [wishlist, setWishlist] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getUniqueCategories = (products) => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        return uniqueCategories;
    }

    const categoryIcons = {
        // 'All Categories': 'icon-all-categories.png',
        'Tissue': 'fa-toilet-paper',
        'Diapers': 'fa-baby',
        'Norland': 'fa-globe',
        'Sunlit': 'fa-sun',
        // Add more categories and their respective icons
    };

    const [categories, setCategories] = useState(getUniqueCategories(products)); // Assuming getUniqueCategories is a function to extract unique categories

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    const handleSearchSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)
        // Filter products based on search query only
        setTimeout(() => {

            const searchedProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(searchedProducts)
            setIsLoading(false)
        }, 1000)
    }

    const handleCategoryClick = (category) => {
        setIsLoading(true);
    
        // Simulate a delay for filtering (you can replace this with your actual filtering logic)
        setTimeout(() => {
            let filteredProducts;
    
            if (category === 'All Categories') {
                filteredProducts = products;  // Show all products if 'All Categories' is selected
            } else {
                filteredProducts = products.filter(product =>
                    product.category === category
                );
            }
    
            setSelectedCategory(category === 'All Categories' ? 'All Categories' : category);
            setFilteredProducts(filteredProducts);
            setIsLoading(false);
        }, 1000);
    }

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
            categories,
            categoryIcons,
            filteredProducts,
            setFilteredProducts,
            handleSearchSubmit,
            isLoading,
            setIsLoading,
            handleCategoryClick
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }