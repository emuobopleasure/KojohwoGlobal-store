import React from 'react'
import ShopItem from './ShopItem'
import products from '../Products'
import { Link } from 'react-router-dom'

const ShopSection = () => {
  return (
    <section>
        <div className='shopsection px-[1.1rem] md:px-[2rem] lg:px-[3rem] grid grid-cols-2 gap-x-3 gap-y-7 md:flex flex-wrap justify-between'>
            {
                products.map((product, id) => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                    <ShopItem
                        item={product}
                    />
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default ShopSection