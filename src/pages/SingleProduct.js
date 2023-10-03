import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../Products'
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { AppContext } from '../context/appContext';

const SingleProductPage = () => {
    window.scrollTo(0, 0)

    const { handleWishlistButtonClick, wishlist } = useContext(AppContext)

    const { id } = useParams()

    const item = products.find((p) => p.id === parseInt(id))

    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);




    return (
        <section>
            <div className="single-item text-gray-700 body-font overflow-hidden bg-base-100 mt-[7.3vh] mb-4 md:mt-20">
                <div className="container py-2 md:py-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={item.name} className="product-image lg:w-1/2 w-full h-full max-h-[20rem] md:max-h-[28rem] md:h-[28rem] object-scale-down md:object-contain object-center rounded-bl-2xl rounded-br-2xl md:rounded relative" src={item.image} />
                        {/* arrow button that navigates to the previously active route */}
                        <Link to='..' className='back-link absolute md:hidden ml-[1rem] top-[4.3rem] p-[10px] rounded-[40%] border-[1px] border-[#374151] bg-[#efeae6]'>
                            <BsArrowLeft size='1.2rem' />
                        </Link>
                        <div className="lg:w-1/2 w-full px-[1.1rem] md:px-[2rem] lg:px-[3rem] lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            <h1 className="product-name text-gray-600 text-3xl title-font font-medium mb-2">{item.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="number-of-reviews text-gray-600 ml-3">{item.numReviews} Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">


                                </span>
                            </div>
                            <p className="leading-relaxed">{item.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-between gap-[6vw]">
                                <div className="title-font font-medium text-2xl text-gray-900">₦{item.price}</div>
                                <Link className='tooltip tooltip-top' to='https://wa.me/message/WRKSVZP2GDD7K1' target='_blank' data-tip="Chat to Order">
                                    <button className="wish-button rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 bg-green-600">
                                        <BsWhatsapp
                                            color='white'
                                            size='1.5rem'

                                        />
                                    </button>
                                </Link>
                            </div>
                            <div className="add-to-wish flex justify-between lg:justify-start gap-[10vw]">
                                <button onClick={() => handleWishlistButtonClick(item) } className="add-to-wish w-full px-[6px] py-[4px] gap-[4px] flex justify-center items-center bg-btnColor text-white font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
                                    <AiOutlineHeart size='1.2rem' />
                                    <p className='addtowish'>
                                       {
                                            isItemInWishlist ? 'Remove from Wishlist' : ' Add to Wishlist'
                                       }
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProductPage