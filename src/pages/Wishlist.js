import React, { useContext } from 'react'
import { CiTrash } from 'react-icons/ci';
import { VscClose } from 'react-icons/vsc';
import { AppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
const Wishlist = () => {
    window.scrollTo(0, 0)

    const { wishlist, handleRemoveFromWishlist, removeFromWishAlert } = useContext(AppContext)

    const numOfWishItems = wishlist.length

    return (
        <section>
            <div className='wishlist px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-[6rem] lg:mt-[8rem] xl:max-w-[90rem] xl:mx-auto'>
                <div className='shopping-cart'>
                    <h1 className='wishlist-heading text-xl text-center font-bold text-gray-600 mb-[0.5rem]'>
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
                                        <Link to='/'>
                                            Click here
                                        </Link>
                                    </button>
                                    <p>to add products</p>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className='wishlist-container bg-[#ede8e8] py-[2rem] px-[1rem] flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 justify-between gap-[1rem] rounded-xl'>
                                {wishlist.map((item) => (
                                    <div key={item.id} className='cart-products w-full'>
                                        <div className="cart-item-card bg-base-100 flex py-4 px-4 rounded-lg shadow-lg hover:bg-base-300 hover:outline hover:outline-white">
                                            <Link to={`/products/${item.id}`} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-base-300">
                                                <img src={item.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                            </Link>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between items-start text-base font-medium text-gray-700">
                                                        <h3>
                                                            <Link to={`/products/${item.id}`}>
                                                                {item.name}
                                                            </Link>
                                                        </h3>
                                                        <div className="flex border-red-500 border rounded-lg mb-[1rem]">
                                                            <button onClick={() => handleRemoveFromWishlist(item.id)} type="button" className="font-bold text-sm text-red-600 hover:text-red-500 flex items-center gap-1">
                                                                <VscClose size='1.2rem' className='font-bold' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <p className="mt-1 text-sm text-gray-500">Salmon</p> */}
                                                </div>
                                                <Link to={`/products/${item.id}`} className="flex flex-1 items-end justify-between text-sm w-[30vw] md:w-[25vw]">
                                                    <div className="div">
                                                        <p className="price">
                                                            ₦{item.price}
                                                        </p>
                                                    </div>
                                                    <div className="flex">
                                                        {/* <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove</button> */}
                                                    </div>
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