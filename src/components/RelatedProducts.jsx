import React, { useMemo, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import products from '../ProductsData';
import RelatedProductCard from './RelatedProductCard';

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
        <section className="related-products py-12 bg-base-100">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">
                        You May Also Like
                    </h2>
                    <p className="text-gray-500">
                        Similar products from the same category
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Left Arrow Button - Desktop Only */}
                    {canScrollLeft && (
                        <button
                            onClick={scrollLeft}
                            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral text-white p-3 rounded-full shadow-lg hover:bg-[#ae2c00] transition-all duration-300 -ml-5"
                            aria-label="Scroll left"
                        >
                            <IoChevronBack size="1.5rem" />
                        </button>
                    )}

                    {/* Right Arrow Button - Desktop Only */}
                    {canScrollRight && (
                        <button
                            onClick={scrollRight}
                            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral text-white p-3 rounded-full shadow-lg hover:bg-[#ae2c00] transition-all duration-300 -mr-5"
                            aria-label="Scroll right"
                        >
                            <IoChevronForward size="1.5rem" />
                        </button>
                    )}

                    {/* Scrollable Products Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScrollPosition}
                        className="scrooll-carousel flex gap-[7vw] md:gap-[5vw] lg:gap-[3vw] overflow-x-auto scroll-smooth py-2 px-2 lg:h-[16rem] items-end lg:pb-[1rem] lg:px-[2rem] bg-[#edebeb] rounded-[2rem]"
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

export default RelatedProducts;