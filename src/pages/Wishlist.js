import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Wishlist = () => {
    window.scrollTo(0, 0)

    return (
        <section>
            <div className='wishlist px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-[6rem] lg:mt-[8rem]'>
                <div className='shopping-cart border-b'>
                    <h1 className='cart-headind text-xl text-center font-bold text-gray-600 mb-[0.5rem]'>
                        Your Wishlist (1)
                    </h1>
                </div>
                <div className='cart-container bg-[#ede8e8] py-[2rem] px-[1rem] flex flex-col lg:flex-row justify-between gap-[1rem]'>
                    <div className='cart-products w-full'>
                        <div className="cart-item-card bg-base-100 flex py-4 px-4 border border-base-300 rounded-lg shadow-lg hover:bg-base-200">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-base-300">
                                <img src="https://molfix.com.ng/wp-content/uploads/2020/04/comfortfix5.png" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex            justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="#"> Molfix </a>
                                        </h3>
                                        <p className="ml-4">$90.00</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Salmon
                                    </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm ">
                                    <div className="div">
                                        {/* <Button text='Buy Now' styling='px-[8px] py-[4px]'  /> */}
                                    </div>
                                    <div className="flex">
                                        <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-products w-full'>
                        <div className="cart-item-card bg-base-100 flex py-4 px-4 border border-base-300 rounded-lg shadow-lg hover:bg-base-200">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-base-300">
                                <img src="https://molfix.com.ng/wp-content/uploads/2020/04/comfortfix5.png" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex            justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="#"> Molfix </a>
                                        </h3>
                                        <p className="ml-4">$90.00</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Salmon
                                    </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm ">
                                    <div className="div">
                                        {/* <Button text='Buy Now' styling='px-[8px] py-[4px]'  /> */}
                                    </div>
                                    <div className="flex">
                                        <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wishlist