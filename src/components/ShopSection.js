import React from 'react'
import ShopItem from './ShopItem'
import products from '../Products'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Categories from './Categories'

const ShopSection = () => {
    return (
        <section>
            <Categories/>
            <div className='shopsection px-[1.1rem] md:px-[2rem] lg:px-[3rem] grid grid-cols-2 gap-x-3 gap-y-7 md:flex flex-wrap justify-between border-b-[1px] pb-[2rem]'>
                {
                    products.map((product) => (
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