import React, { useContext, useState } from 'react'
import ShopItem from './ShopItem'
import Pagination from './Pagination'
import Categories from './Categories'
import { AppContext } from '../context/appContext'

const ShopSection = () => {

    const { filteredProducts, isLoading, setIsLoading } = useContext(AppContext)

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 8

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    const handlePageChange = (pageNumber) => {
        setIsLoading(true)

        setTimeout(() => {

            setCurrentPage(pageNumber)
            setIsLoading(false)
        }, 1000)
        
    }

    return (
        <section id='shopsection'>
            <Categories />
            <div className='shopsection px-[1.1rem] md:px-[2rem] lg:px-[3rem] grid grid-cols-2 gap-x-3 gap-y-7 lg:grid-cols-3 lg:gap-x-1 xl:gap-x-4 border-b-[1px] pb-[2rem]'>
                {isLoading && (
                    // loading dots overlay
                    <div className='overlay loading-backdrop'>
                        <div className="loadin absolute left-[45vw] md:static md:mx-auto">
                            {/* spinner/loader */}
                            <span className="loading loading-dots loading-lg text-btnColor text-[5rem]"></span>
                        </div>
                    </div>
                )}
                {
                    !isLoading && currentProducts.length === 0 ?
                        <div className='product-not-found'>
                            <p>Product not found</p>
                        </div>
                        :
                        !isLoading && currentProducts.map((product) => (
                            // <Link to={`/products/${product.id}`} key={product.id}>
                                <ShopItem
                                    key={product.id}
                                    item={product}
                                />
                            // </Link>
                        ))
                }
            </div>

            <div className='pagination-wrapper mt-[2rem] flex justify-center'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </section>
    )
}

export default ShopSection