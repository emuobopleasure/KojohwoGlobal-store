import React, { useContext } from 'react'
import { CiTrash } from 'react-icons/ci';
import { AppContext } from '../context/appContext';
const Wishlist = () => {
    window.scrollTo(0, 0)

    const { wishlist } = useContext(AppContext)
    

    return (
        <section>
            <div className='wishlist px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-[6rem] lg:mt-[8rem] xl:max-w-[90rem] xl:mx-auto'>
                <div className='shopping-cart'>
                    <h1 className='cart-headind text-xl text-center font-bold text-gray-600 mb-[0.5rem]'>
                        Your Wishlist (1)
                    </h1>
                </div>
                <div className='cart-container bg-[#ede8e8] py-[2rem] px-[1rem] flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 justify-between gap-[1rem] rounded-xl'>
                    {wishlist.map((item) => (
                        <div key={item.id} className='cart-products w-full'>
                            <div className="cart-item-card bg-base-100 flex py-4 px-4 border border-base-300 rounded-lg shadow-lg hover:bg-base-300 hover:outline hover:outline-white">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-base-300">
                                    <img src={item.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-700">
                                            <h3>
                                                {item.name}
                                            </h3>
                                            <div className="flex">
                                                <button type="button" className="font-medium text-sm text-red-600 hover:text-red-500 flex items-center gap-1">
                                                    <CiTrash />
                                                    <p>Remove</p>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <p className="mt-1 text-sm text-gray-500">
                                        Salmon
                                    </p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm ">
                                        <div className="div">
                                            <p className="price">
                                                ₦{item.price}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            {/* <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove
                                        </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Wishlist