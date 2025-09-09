import { createContext, useEffect, useState } from "react";
import products from "../ProductsData";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBroom, FaChild, FaGift, FaSchool, FaBook , FaPumpSoap } from "react-icons/fa";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();


    // categories array with react-icons
    const initialCategories = [
        { id: 1, name: "Home Articles", image: '/images/categoryImages/home-art2.webp', icon: <FaBroom />, slug: "home-articles" },

        { id: 2, name: "Kiddies", image: '/images/categoryImages/kiddies2.webp', icon: <FaChild />, slug: "kiddies" },

        { id: 3, name: "Party/Gift Items", image: '/images/categoryImages/party1.webp', icon: <FaGift />, slug: "party-gift-items" },

        { id: 4, name: "Back to School", image: '/images/categoryImages/sch3.webp', icon: <FaSchool />, slug: "back-to-school" },

        { id: 5, name: "Books/Stationeries", image: '/images/categoryImages/books2.webp', icon: <FaBook />, slug: "books-stationeries" },

        { id: 6, name: "Toiletries", image: '/images/categoryImages/toilet1.webp', icon: <FaPumpSoap />, slug: "toiletries" },
    ];

    const [categories] = useState(initialCategories);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [isLoading, setIsLoading] = useState(false);
    const [addToWishAlert, setAddToWishAlert] = useState(false);
    const [removeFromWishAlert, setRemoveFromWishAlert] = useState(false);
    const [showStickyCategories, setShowStickyCategories] = useState(false);

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


    // ✅ Generate unique product key (id + slug)
    const getProductKey = (product) => `${product.id}-${product.slug}`;

    // ✅ Load & migrate wishlist from localStorage
    const loadWishlistFromLocalStorage = () => {
        const saved = localStorage.getItem("wishlistData");
        if (!saved) return [];

        let parsed = JSON.parse(saved);

        // Ensure every item has a key
        parsed = parsed.map((item) => ({
            ...item,
            key: item.key || getProductKey(item),
        }));

        // Save migrated version back
        localStorage.setItem("wishlistData", JSON.stringify(parsed));
        return parsed;
    };

    const [wishlist, setWishlist] = useState(loadWishlistFromLocalStorage);

    // ✅ Save wishlist to localStorage
    const saveWishlistToLocalStorage = (wishlist) => {
        localStorage.setItem("wishlistData", JSON.stringify(wishlist));
    };

    // ✅ Add to wishlist
    const handleAddToWishlist = (product) => {
        const productWithTimestamp = {
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            key: getProductKey(product),
            addedAt: new Date().getTime(),
        };

        // prevent duplicates
        const filteredWishlist = wishlist.filter(
            (item) => item.key !== productWithTimestamp.key
        );

        const updatedWishlist = [productWithTimestamp, ...filteredWishlist];
        setWishlist(updatedWishlist);
        saveWishlistToLocalStorage(updatedWishlist);
    };

    // ✅ Remove from wishlist
    const handleRemoveFromWishlist = (product) => {
        const productKey = getProductKey(product);

        const updatedWishlist = wishlist.filter(
            (item) => item.key !== productKey
        );

        setWishlist(updatedWishlist);
        saveWishlistToLocalStorage(updatedWishlist);
        setRemoveFromWishAlert(true);
        setTimeout(() => setRemoveFromWishAlert(false), 2000);
    };

    // ✅ Toggle wishlist button
    const handleWishlistButtonClick = (product) => {
        const productKey = getProductKey(product);
        const isItemInWishlist = wishlist.some(
            (wishlistItem) => wishlistItem.key === productKey
        );

        if (isItemInWishlist) {
            handleRemoveFromWishlist(product);
        } else {
            handleAddToWishlist(product);
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