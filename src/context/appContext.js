import { createContext, useEffect, useState } from "react";
import products from "../Products";
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
        // getUniqueCategories is a function that extracts unique category names from the products array.
        // Set is a built-in object in JavaScript that allows you to store unique values. In this case, it's being used to create a set of unique category names.
        // Set is a built-in object in JavaScript that allows you to store unique values. In this case, it's being used to create a set of unique category names.
    }

    const [categories] = useState(getUniqueCategories(products)); // Assuming getUniqueCategories is a function to extract unique categories

    //categories object that maps each icon to its corresponding category.
    //this mapping is then used to display the icons alongside the categories in the Categories component
    const categoryIcons = {
        'Tissue': 'fa-toilet-paper',
        'Diapers': 'fa-baby',
        'Norland': 'fa-globe',
        'Sunlit': 'fa-sun',
    };


    useEffect(() => {
        setFilteredProducts(products)
    }, [])

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

        setWishlist((prevWishlist) => ([...prevWishlist, product]));
    };

    const handleRemoveFromWishlist = (productId) => {
        setWishlist((prevWishlist) => (prevWishlist.filter(product => product.id !== productId)));
    };

    
    const handleWishlistButtonClick = (item) => {
        const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id)

        if (isItemInWishlist) {
            handleRemoveFromWishlist(item.id)
        } else {
            handleAddToWishlist(item)
        }

        // setWishlist([...wishlist])
    }

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
            handleCategoryClick,
            handleWishlistButtonClick
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }