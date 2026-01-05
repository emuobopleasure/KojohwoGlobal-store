import React, { useContext } from 'react'
// import { AiOutlineHeart } from 'react-icons/ai';
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb';
import { AppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
import Button from './Button';


const ShopItem = ({ item }) => {
    const { wishlist, handleWishlistButtonClick } = useContext(AppContext)
    const getProductKey = (item) => `${item.id}-${item.slug}`
    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.key === getProductKey(item));


    return (
        <article className='w-auto'>
            <div className="flex justify-center items-center w-auto cursor-pointer">
                <div className="card bg-base-100 shadow-2xl hover:shadow-xl h-[17rem] rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row w-[12rem] sm:h-52 sm:w-auto md:w-[43vw] lg:w-[18rem] xl:lg:w-[23rem] transition ease-in-out delay-50 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                    <Link to={`/products/${item.id}-${item.slug}`} className='image-wrapper overflow-hidden h-1/2 w-full sm:h-full sm:w-1/2'>
                        <img className="object-cover h-full w-full" src={item.image} alt={item.name} />
                    </Link>
                    <div className="card-buttom flex-1 w-full flex flex-col items-baseline h-1/2 px-4 mt-[1px] mb-[7px] sm:items-baseline sm:w-1/2 sm:h-[12rem] sm:my-auto sm:justify-between">
                        <Link to={`/products/${item.id}-${item.slug}`} className='w-full flex flex-col items-start h-full gap-[6px] sm:gap-[1.7rem]'>
                            <h1 className="text-base font-extrabold mb-0 text-gray-600 font-sans truncate w-full">
                                {item.name}
                            </h1>
                            <p className="text-xs text-gray-700 line-clamp-2 w-4/5">
                                {item.description}
                            </p>
                            <h1 className="font-bold text-gray-600">₦{item.price}</h1>
                        </Link>
                        <div className="w-full mx-auto md:mx-0">
                            {/* <Button
                                text="Add to Wishlist" styling="mr-5 rounded-3xl text-sm px-[8px] py-[1px] font-light mr-0"
                            /> */}
                            {
                                isItemInWishlist ?
                                    (
                                        <button onClick={() => handleWishlistButtonClick(item)} className="renove-from-wish w-full px-[6px] py-[4px] gap-[2px] flex justify-center items-center bg-transaparent border border-neutral text-neutral font-medium text-[55%] sm:text-[51%] landscape:text-[60%] md:text-[65%] lg:text-[47%] xl:text-[65%] leading-snug capitalize rounded-full shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:text-white active:shadow-lg transition duration-150 ease-in-out">
                                            <TbHeartMinus size='1.2rem' />
                                            <p className='addtowish font-semibold'>
                                                Remove from Wishlist
                                            </p>
                                        </button>
                                    )
                                    :
                                    (
                                        <button onClick={() => handleWishlistButtonClick(item)} className="add-to-wish w-full px-[6px] py-[5px] gap-[2px] flex justify-center items-center bg-neutral text-white font-medium text-[63%] md:text-sm lg:text-[60%] xl:text-sm leading-snug capitalize rounded-full shadow-sm hover:bg-[#ae2c00] focus:bg-[#ae2c00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg=[#ae2c00] active:shadow-lg transition duration-150 ease-in-out">
                                            <TbHeartPlus size='1.2rem' />
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