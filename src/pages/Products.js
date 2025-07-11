import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/appContext'
import Categories from '../components/Categories'
import ShopItem from '../components/ShopItem'
import Pagination from '../components/Pagination'
import { useSearchParams } from 'react-router-dom'
import products from '../Products'

const Products = () => {
    const {
        filteredProducts,
        isLoading,
        handleSearchSubmit,
        setIsLoading,
        setFilteredProducts,
        // searchQuery,
        setSearchQuery,
        // handleCategoryClick,
        // selectedCategory,
        // categories,
        // setShowStickyCategories 
    } = useContext(AppContext)

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9

    const [searchParams] = useSearchParams()

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    const handlePageChange = (pageNumber) => {
        setIsLoading(true)

        setTimeout(() => {
            setCurrentPage(pageNumber)
            setIsLoading(false)

            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 500)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(e)
            setCurrentPage(1)
        }
    }

    useEffect(() => {
        const query = searchParams.get('search');
        if (query) {
            setSearchQuery(query);
            setIsLoading(true);

            setTimeout(() => {
                const searched = products.filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredProducts(searched);
                setIsLoading(false);
            }, 1000);
        }
    }, [searchParams]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page when filteredProducts change
    }, [filteredProducts]);


    return (
        <section className="px-[1.1rem] md:px-[2rem] lg:px-[3rem] pt-[5.5rem] md:pt-28 lg:pt-36">
            <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center md:text-left">All Products</h1>

            {/* Search bar */}
            {/* <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full md:w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-btnColor"
                />
            </div> */}

            {/* Categories filter */}
            <div className="mb-6">
                <Categories />
            </div>

            {/* Products Grid */}
            {isLoading ? (
                <div className="fixed inset-0 bg-[rgba(229,227,225,0.4)] z-50 flex items-center justify-center">
                    <span className="loading loading-dots loading-lg text-btnColor"></span>
                </div>
            ) : currentProducts.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
                    {currentProducts.map((product) => (
                        <ShopItem key={product.id} item={product} />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination-wrapper mt-10 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </section>
    )
}
export default Products