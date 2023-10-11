import React, { useContext } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AppContext } from '../context/appContext';
import { Link } from 'react-router-dom';


const ShopItem = ({ item }) => {
    const { wishlist, handleWishlistButtonClick } = useContext(AppContext)
    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);


    return (
        <article>
            <div className="flex justify-center items-center w-full cursor-pointer">
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl h-[17rem] rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row w-[12rem] sm:h-52 sm:w-auto md:w-[43vw] lg:w-[23rem] transition ease-in-out delay-50 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                    <Link to={`/products/${item.id}`} className='image-wrapper overflow-hidden h-1/2 w-full sm:h-full sm:w-1/2'>
                        <img className="object-cover h-full w-full" src={item.image} alt={item.name} />
                    </Link>
                    <div className="card-buttom flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-4 sm:h-full sm:items-baseline sm:w-1/2 sm:gap-[2rem]">
                        <Link to={`/products/${item.id}`} className='w-full flex flex-col items-start sm:gap-4'>
                            <h1 className="text-base font-bold mb-0 text-gray-600 font-sans truncate w-full">
                                {item.name}
                            </h1>
                            <p className="text-xs text-gray-500 w-4/5">
                                {item.description}
                            </p>
                            <h1 className="font-bold text-gray-500">₦{item.price}</h1>
                        </Link>
                        <div className="w-full mx-auto md:mx-0">
                            {/* <Button
                                text="Add to Wishlist" styling="mr-5 rounded-3xl text-sm px-[8px] py-[1px] font-light mr-0"
                            /> */}
                            {
                                isItemInWishlist ?
                                    (
                                        <button onClick={() => handleWishlistButtonClick(item)} className="add-to-wish w-full px-[6px] py-[4px] gap-[2px] flex justify-center items-center bg-transaparent border border-btnColor text-btnColor font-medium text-[60%] md:text-[65%] leading-snug capitalize rounded-full shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
                                            <AiOutlineHeart size='1.2rem' />
                                            <p className='addtowish'>
                                                Remove from Wishlist
                                            </p>
                                        </button>
                                    )
                                    :
                                    (
                                        <button onClick={() => handleWishlistButtonClick(item)} className="add-to-wish w-full px-[6px] py-[4px] gap-[2px] flex justify-center items-center bg-btnColor text-white font-medium text-[63%] md:text-sm leading-snug capitalize rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
                                            <AiOutlineHeart size='1.2rem' />
                                            <p className='addtowish'>
                                                Add to Wishlist
                                            </p>
                                        </button>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ShopItem