import React, { useContext, useState } from 'react'
import ShopItem from './ShopItem'
import products from '../Products'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Categories from './Categories'
import { AppContext } from '../appContext'

const ShopSection = () => {
    const [isLoading, setIsLoading] = useState(false)

    const { searchQuery,
        selectedCategory,
        setSelectedCategory, category,
        categories, } = useContext(AppContext)


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedCategory || product.category === selectedCategory)
    );

    const handleCategoryClick = (category) => {
        setIsLoading(true)

        // Simulate a delay for filtering (you can replace this with your actual filtering logic)
        setTimeout(() => {
            setSelectedCategory(category)
            setIsLoading(false)
        }, 1000)
    }
    // const noFilter = products.filter((product) => product.name.toLowerCase().includes(!searchQuery.toLowerCase()))



    return (
        <section>
            <Categories handleCategoryClick={handleCategoryClick} />
            <div className='shopsection px-[1.1rem] md:px-[2rem] lg:px-[3rem] grid grid-cols-2 gap-x-3 gap-y-7 md:flex flex-wrap justify-between border-b-[1px] pb-[2rem]'>
                {isLoading && (
                    <div className='overlay loading-backdrop'>
                        <div className="loadin absolute left-[45vw] md:static md:mx-auto">
                            <span className="loading loading-dots loading-lg text-btnColor text-[5rem]"></span>
                        </div>
                    </div>
                )}
                {
                   !isLoading && filteredProducts.length === 0 ?
                        <div className='product-not-found'>
                            <p>Product not found</p>
                        </div>
                        :
                        !isLoading && filteredProducts.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id}>
                                <ShopItem
                                    key={product.id}
                                    item={product}
                                />
                            </Link>
                        ))
                }
            </div>

            <div className='pagination-wrapper mt-[2rem] flex justify-center'>
                <Pagination />
            </div>
        </section>
    )
}

export default ShopSection