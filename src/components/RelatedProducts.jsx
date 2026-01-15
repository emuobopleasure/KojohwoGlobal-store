import React, { useMemo, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import products from '../ProductsData';
import RelatedProductCard from './RelatedProductCard';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const RelatedProducts = ({ currentProduct }) => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Get related products from same category, excluding current product
    const relatedProducts = useMemo(() => {
        if (!currentProduct) return [];

        // Filter products by same category and EXCLUDE current product
        const filtered = products.filter(product => 
            product.category === currentProduct.category && 
            product.id !== currentProduct.id  // ✅ This prevents current product from showing
        );

        // Shuffle and get first 8 products for horizontal scroll
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    }, [currentProduct]);

    // Check scroll position to show/hide arrows
    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

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

    // Don't render if no related products
    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="related-products px-[1.1rem] md:px-[2rem] lg:px-[3rem] py-12 bg-base-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                        More to Love
                    </h2>
                    <p className="text-gray-600">
                        Similar products from the same category
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
                        className="flex gap-[7vw] md:gap-[5vw] lg:gap-[3vw] overflow-x-auto scroll-smooth pb-4 "
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#afb4be #E5E7EB'
                        }}
                    >
                        {relatedProducts.map((product) => (
                            <div key={product.id} className="flex-shrink-0 w-[12rem] sm:w-[18rem] lg:w-[23rem]">
                                <RelatedProductCard item={product} />
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
            <style jsx>{`
                .flex::-webkit-scrollbar {
                    height: 8px;
                }
                .flex::-webkit-scrollbar-track {
                    background: #E5E7EB;
                    border-radius: 10px;
                }
                .flex::-webkit-scrollbar-thumb {
                    background: #4B5563;
                    border-radius: 10px;
                }
                .flex::-webkit-scrollbar-thumb:hover {
                    background: #374151;
                }
            `}</style>
        </section>
    );
};

export default RelatedProducts;