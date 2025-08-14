import { createContext, useEffect, useState } from "react";
import products from "../ProductsData";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFileAlt, FaChild, FaGift, FaSchool, FaBook, FaToiletPaper } from "react-icons/fa";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const getWishlistFromLocalStorage = () => {
        const savedWishlist = localStorage.getItem("wishlistData");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    };

    // categories array with react-icons
    const initialCategories = [
        { id: 1, name: "Home Articles", image: '/images/categoryImages/home-art2.webp', icon: <FaFileAlt />, slug: "home-articles" },

        { id: 2, name: "Kiddies", image: '/images/categoryImages/kiddies2.webp', icon: <FaChild />, slug: "kiddies" },

        { id: 3, name: "Party/Gift Items", image: '/images/categoryImages/party1.webp', icon: <FaGift />, slug: "party-gift-items" },

        { id: 4, name: "Back to School", image: '/images/categoryImages/sch3.webp', icon: <FaSchool />, slug: "back-to-school" },

        { id: 5, name: "Books/Stationeries", image: '/images/categoryImages/books2.webp', icon: <FaBook />, slug: "books-stationeries" },

        { id: 6, name: "Toiletries", image: '/images/categoryImages/toilet1.webp', icon: <FaToiletPaper />, slug: "toiletries" },
    ];

    const [categories] = useState(initialCategories);
    const [wishlist, setWishlist] = useState(() => getWishlistFromLocalStorage());
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [isLoading, setIsLoading] = useState(false);
    const [addToWishAlert, setAddToWishAlert] = useState(false);
    const [removeFromWishAlert, setRemoveFromWishAlert] = useState(false);
    const [showStickyCategories, setShowStickyCategories] = useState(false);

    // Save wishlist to local storage
    const saveWishlistToLocalStorage = (wishlist) => {
        localStorage.setItem("wishlistData", JSON.stringify(wishlist));
    };

    useEffect(() => {
        setFilteredProducts(products);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setIsLoading(true);
        const runSearch = () => {
            const searchedProducts = products.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(searchedProducts);
            setIsLoading(false);
        };

        if (location.pathname !== "/products") {
            navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
        } else {
            setTimeout(runSearch, 1000);
        }
    };

    const handleCategoryClick = (category) => {
        sessionStorage.setItem("selectedCategory", category);
        setIsLoading(true);

        setTimeout(() => {
            if (category === "All Categories") {
                setSelectedCategory("All Categories");
                setFilteredProducts(products);
            } else {
                setSelectedCategory(category);
                setFilteredProducts(products.filter((p) => p.category === category));
            }
            setIsLoading(false);
        }, 500);
    };

    useEffect(() => {
        // // const storedCategory = sessionStorage.getItem("selectedCategory") || "All Categories";
        // // setSelectedCategory(storedCategory);

        // if (category === "All Categories") {
        //     setFilteredProducts(products);
        // } else {
        //     setFilteredProducts(products.filter((p) => p.category === storedCategory));
        // }

        setFilteredProducts(products)
    }, []);

    const handleAddToWishlist = (product) => {
        const productWithTimestamp = {
            ...product,
            addedAt: new Date().getTime() // Current timestamp
        };

        // Create new array with the newest item first
        const updatedWishlist = [productWithTimestamp, ...wishlist]; // Fixed this line
        setWishlist(updatedWishlist);
        saveWishlistToLocalStorage(updatedWishlist);
    };

    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter((item) => item.id !== productId);
        setWishlist(updatedWishlist);
        saveWishlistToLocalStorage(updatedWishlist);
        setRemoveFromWishAlert(true);
        setTimeout(() => setRemoveFromWishAlert(false), 2000);
    };

    const handleWishlistButtonClick = (item) => {
        const isItemInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
        if (isItemInWishlist) {
            handleRemoveFromWishlist(item.id);
        } else {
            handleAddToWishlist(item);
            setAddToWishAlert(true);
            setTimeout(() => setAddToWishAlert(false), 2000);
        }
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
                categories,
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
                setShowStickyCategories,
                initialCategories,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };