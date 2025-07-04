import React, { useContext } from 'react'
import ShopItem from './ShopItem'
import { AppContext } from '../context/appContext'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
    const { filteredProducts, isLoading } = useContext(AppContext)

    const featured = filteredProducts.slice(0, 6)

    return (
        <section id="shopsection" className="px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-16 mb-[4rem]">
            <div className="section-header text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-700">Featured Products</h2>
                <p className="text-gray-500 text-sm">A quick glance at our best picks</p>
            </div>

            {isLoading ? (
                <div className="flex justify-center">
                    <span className="loading loading-dots loading-lg text-btnColor"></span>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:flex flex-wrap justify-between">
                    {featured.map((product) => (
                        <ShopItem key={product.id} item={product} />
                    ))}
                </div>
            )}

            <div className="text-center mt-14">
                <Link to="/products">
                    <button className="btn bg-btnColor text-white border-none hover:bg-pink-500">
                        View All Products
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default FeaturedProducts
