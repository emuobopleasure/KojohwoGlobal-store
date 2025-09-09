import React, { useContext } from 'react'
import { VscClose } from 'react-icons/vsc';
import { AppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
const Wishlist = () => {
    window.scrollTo(0, 0)

    const { wishlist, handleRemoveFromWishlist } = useContext(AppContext)

    const numOfWishItems = wishlist.length

    return (
        <section>
            <div className='wishlist px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-[6rem] lg:mt-[8rem] 2xl:max-w-[128rem] 2xl:mx-auto'>
                <div className='wishlist-heading'>
                    <h1 className='wishlist-heading text-xl text-center font-bold text-gray-600 mb-[1.5rem] lg:mb-[2rem]'>
                        Total Items ({numOfWishItems})
                    </h1>
                </div>

                {
                    wishlist.length === 0 ?
                        (
                            <div className='grid justify-center bg-[#ede8e8] py-[2rem] px-[1rem] rounded-xl'>
                                <p>
                                    Your wishlist is empty.
                                </p>
                                <div className='flex items-center gap-1'>
                                    <button className='text-blue-500'>
                                        <Link to='/products'>
                                            Click here
                                        </Link>
                                    </button>
                                    <p>to add products</p>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className='wishlist-container bg-[#ede8e8] py-[2rem] px-[1rem] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 rounded-xl'>
                                {wishlist.map((item) => (
                                    <div key={item.key} className='wishlist-products'>
                                        <div className="cart-item-card bg-base-100 flex p-4 rounded-2xl shadow-xl hover:border hover:border-accent relative cursor-pointer">
                                            {/* Product Image */}
                                        <Link to={`/products/${item.id}-${item.slug}`} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </Link>

                                            {/* Product Info */}
                                            <div className="ml-4 flex flex-col flex-1 justify-between min-w-0">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-base font-medium text-gray-700 truncate">
                                                        <Link to={`/products/${item.id}-${item.slug}`} className="hover:text-accent">
                                                            {item.name}
                                                        </Link>
                                                    </h3>

                                                    {/* Delete Button*/}
                                                    <button
                                                        onClick={() => handleRemoveFromWishlist(item)}
                                                        className="text-red-600 border border-red-600 rounded-lg hover:text-white ml-2 flex-shrink-0 hover:bg-red-500"
                                                        aria-label="Remove item"
                                                    >
                                                        <VscClose size='1.2rem' className="font-bold" />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <Link to={`/products/${item.id}-${item.slug}`} className="mt-2">
                                                    <p className="text-sm font-semibold text-gray-900">
                                                        ₦{item.price}
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                }
            </div>
        </section>
    )
}

export default Wishlist