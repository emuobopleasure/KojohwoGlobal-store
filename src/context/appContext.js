import { createContext, useEffect, useState } from "react";
import products from "../Products";


const AppContext = createContext()

const AppProvider = ({ children }) => {
    const getWishlistFromLocalStorage = () => {
        const savedWishlist = localStorage.getItem('wishlistData')
        return savedWishlist ? JSON.parse(savedWishlist) : []
    }

    //for handling sticky categories in products list
    const [showStickyCategories, setShowStickyCategories] = useState(false)

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(() => {
        return sessionStorage.getItem('selectedCategory') || 'All Categories'
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = getWishlistFromLocalStorage()
        return Array.isArray(savedWishlist) ? savedWishlist : []
    });
    // Using a callback function in useState, so i can ensure that wishlist is always an array, even if it's initially null or undefined.

    const [filteredProducts, setFilteredProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [addToWishAlert, setAddToWishAlert] = useState(false)
    const [removeFromWishAlert, setRemoveFromWishAlert] = useState(false)

    const saveWishlistToLocalStorage = (wishlist) => {
        localStorage.setItem('wishlistData', JSON.stringify(wishlist))
    }

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
        getWishlistFromLocalStorage()
    },)

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
            // window.scrollTo("#shopsection")
        }, 1000)
    }

    const handleCategoryClick = (category) => {
        sessionStorage.setItem('selectedCategory', category);

        // Simulate a delay for filtering
        setIsLoading(true);

        setTimeout(() => {

            // Ensure products are available before filtering
            if (!products || products.length === 0) {
                setFilteredProducts([]); // or keep previous state
                setIsLoading(false);
                return;
            }

            let newFilteredProducts;

            if (category === selectedCategory || category === 'All Categories') {
                setSelectedCategory('All Categories');
                sessionStorage.setItem('selectedCategory', 'All Categories');
                newFilteredProducts = products;
            } else {
                setSelectedCategory(category);
                sessionStorage.setItem('selectedCategory', category);
                newFilteredProducts = products.filter(product => product.category === category);

            }

            setFilteredProducts(newFilteredProducts);
            setIsLoading(false);
        }, 500); // 500ms is fine for feedback
    }

    //returns react state to what is in sessionstorage
    useEffect(() => {
        const storedCategory = sessionStorage.getItem('selectedCategory') || 'All Categories';

        setSelectedCategory(storedCategory);

        if (storedCategory === 'All Categories') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.category === storedCategory
            );
            setFilteredProducts(filtered);
        }
    }, []);


    const handleAddToWishlist = (product) => {
        const updatedWishlist = [...wishlist, product]

        setWishlist(updatedWishlist);
        saveWishlistToLocalStorage(updatedWishlist)
    };

    const handleRemoveFromWishlist = (productId) => {
        // setWishlist((prevWishlist) => (prevWishlist.filter(product => product.id !== productId)));
        const updatedWishlist = wishlist.filter((item) => item.id !== productId)
        setWishlist(updatedWishlist)
        saveWishlistToLocalStorage(updatedWishlist)
        setRemoveFromWishAlert(true)
        setTimeout(() => {
            setRemoveFromWishAlert(false)
        }, 2000)
    };


    const handleWishlistButtonClick = (item) => {
        const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id)

        if (isItemInWishlist) {
            handleRemoveFromWishlist(item.id)
            setRemoveFromWishAlert(true)
            setTimeout(() => {
                setRemoveFromWishAlert(false)
            }, 2000)
        } else {
            handleAddToWishlist(item)
            setAddToWishAlert(true)
            setTimeout(() => {
                setAddToWishAlert(false)
            }, 2000)


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
            handleWishlistButtonClick,
            addToWishAlert,
            removeFromWishAlert,
            showStickyCategories,
            setShowStickyCategories

        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }