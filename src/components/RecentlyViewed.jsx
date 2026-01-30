import React, { useState, useRef, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import products from '../ProductsData';
import RecentlyViewedCard from './RecentlyViewedCard';
import useRecentlyViewed from '../hooks/useRecentlyViewed';

const RecentlyViewed = ({ currentProductId = null }) => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
    const { getRecentlyViewed } = useRecentlyViewed();

    // Load recently viewed products on mount and when currentProductId changes
    useEffect(() => {
        // console.log('🔄 RecentlyViewed useEffect running...');
        // console.log('Current Product ID:', currentProductId);
        
        const recentlyViewed = getRecentlyViewed();
        // console.log('Recently viewed from localStorage:', recentlyViewed);

        // Map IDs to actual product objects
        const productsList = recentlyViewed
            .map(item => {
                const product = products.find(p => p.id === item.id);
                // console.log(`Mapping ID ${item.id}:`, product ? '✅ Found' : '❌ Not found');
                return product;
            })
            .filter(product => {
                if (!product) {
                    console.log('❌ Filtered out null product');
                    return false;
                }
                if (currentProductId && product.id === currentProductId) {
                    // console.log(`❌ Filtered out current product: ${product.id}`);
                    return false;
                }
                return true;
            });

        // console.log('Final products list:', productsList);
        // console.log('Number of products to display:', productsList.length);

        // Set up to 8 products
        const finalList = productsList.slice(0, 8);
        setRecentlyViewedProducts(finalList);
        // console.log('✅ Set recently viewed products:', finalList.length);
    }, [currentProductId, getRecentlyViewed]);

    // Check scroll position to show/hide arrows
    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    // Initialize scroll position check
    useEffect(() => {
        checkScrollPosition();
    }, [recentlyViewedProducts]);

    // Scroll left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        }
    };

    // Scroll right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        }
    };

    // console.log('🎨 Rendering RecentlyViewed. Products count:', recentlyViewedProducts.length);

    // Don't render if no recently viewed products
    if (recentlyViewedProducts.length === 0) {
        // console.log('⚠️ Not rendering - no products to show');
        return null;
    }

    // console.log('✅ Rendering RecentlyViewed section with', recentlyViewedProducts.length, 'products');

    return (
        <section className="recently-viewed pb-12 bg-base-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                        Recently Viewed
                    </h2>
                    <p className="text-gray-600">
                        Continue shopping where you left off
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Left Arrow Button - Desktop Only */}
                    {canScrollLeft && (
                        <button
                            onClick={scrollLeft}
                            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral text-white p-3 rounded-[40%] shadow-lg hover:bg-[#ae2c00] transition-all duration-300 -ml-[1.5rem]"
                            aria-label="Scroll left"
                        >
                            <BsArrowLeft size="1.5rem" />
                        </button>
                    )}

                    {/* Right Arrow Button - Desktop Only */}
                    {canScrollRight && (
                        <button
                            onClick={scrollRight}
                            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral text-white p-3 rounded-[40%] shadow-lg hover:bg-[#ae2c00] transition-all duration-300 -mr-[1.5rem]"
                            aria-label="Scroll right"
                        >
                            <BsArrowRight size="1.5rem" />
                        </button>
                    )}

                    {/* Scrollable Products Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScrollPosition}
                        className="scrooll-carousel flex gap-[7vw] md:gap-[5vw] lg:gap-[3vw] overflow-x-auto scroll-smooth py-2 px-2 lg:h-[16rem] items-end lg:pb-[1rem] lg:px-[2rem] bg-[#edebeb] rounded-[2rem]"
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#afb4be #E5E7EB',
                        }}
                    >
                        {recentlyViewedProducts.map((product) => (
                            <div key={product.id} className="flex-shrink-0 w-[12rem] sm:w-[18rem] lg:w-[23rem]">
                                <RecentlyViewedCard item={product} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Scroll Hint */}
                <p className="text-center text-xs text-gray-400 mt-2 lg:hidden">
                    ← Swipe to see more →
                </p>
            </div>

            {/* Custom Scrollbar Styling */}
            <style>{`
                .recently-viewed .flex::-webkit-scrollbar {
                    height: 8px;
                }
                .recently-viewed .flex::-webkit-scrollbar-track {
                    background: #E5E7EB;
                    border-radius: 10px;
                }
                .recently-viewed .flex::-webkit-scrollbar-thumb {
                    background: #4B5563;
                    border-radius: 10px;
                }
                .recently-viewed .flex::-webkit-scrollbar-thumb:hover {
                    background: #374151;
                }
            `}</style>
        </section>
    );
};

export default RecentlyViewed;
