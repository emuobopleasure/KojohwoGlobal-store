import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import products from '../Products'
import { BsWhatsapp } from 'react-icons/bs';
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb';
// import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { AppContext } from '../context/appContext';

const SingleProductPage = () => {
    // useEffect(() => {
        
    //     window.scrollTo(0, 0)
    // })

    

    const { handleWishlistButtonClick, wishlist } = useContext(AppContext)

    const { id } = useParams()

    const item = products.find((p) => p.id === parseInt(id))

    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);

    const navigate = useNavigate()

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const yOffset = window.scrollY

        if (yOffset > 200) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    useEffect(() => {

        window.scrollTo(0, 0)

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     // return () => {
    //     //     window.removeEventListener('scroll', handleScroll)
    //     // }
    // }, [])

    // const handleWishlistButtonScroll = () => {
    //     const button = document.getElementById('addToWish');
    //     const footer = document.getElementById('footer');

    //     if (button && footer) {
    //         const buttonRect = button.getBoundingClientRect();
    //         const footerRect = footer.getBoundingClientRect();

    //         if (buttonRect.top + buttonRect.height < footerRect.top) {
    //             button.classList.add('fixed-bottom');
    //         } else {
    //             button.classList.remove('fixed-bottom');
    //         }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleWishlistButtonScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleWishlistButtonScroll);
    //     };
    // }, []);








    return (
        <section>
            <div className="single-item text-gray-700 h-screen landscape:overflow-y-scroll hidden-scroll body-font bg-base-100 mt-[7.3vh] mb-4 md:mt-20">
                <div className="container py-2 md:py-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap landscape:flex-nowrap landscape:items-center">
                        <div className='image-wrapper w-full lg:w-1/2 lg:h-full'>
                            <img alt={item.name} className="product-image w-full h-full lg:h-full max-h-[20rem] md:max-h-[28rem] md:h-[28rem] object-scale-down md:object-contain object-center rounded-bl-2xl rounded-br-2xl md:rounded relative" src={item.image} />
                        </div>
                        {/* arrow button that navigates to the previously active route */}
                        <button onClick={() => navigate(-1)} className='back-link absolute md:hidden ml-[1rem] top-[4.3rem] p-[10px] rounded-[40%] border-[1px] border-[#374151] bg-[#efeae6]'>
                            <BsArrowLeft size='1.2rem' />
                        </button>
                        <div className="lg:w-1/2 w-full px-[1.1rem] md:px-[2rem] lg:px-[3rem] lg:pl-10 lg:py-6 mt-6 lg:mt-0 lg:flex flex-col justify-between">
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
                            {/* add to wishlist buttons for mobile and tablet displays */}
                            <div id='addToWish' className={`add-to-wish lg:hidden landscape:hidden ${showButton ? 'gap-[10vw]' : ' fixed bottom-2 right-4 left-4 md:right-8 md:left-8'}`}>
                                {
                                    isItemInWishlist ?
                                        (
                                            <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[4px] h-[3rem] landscape:h-[2.5rem] md:h-[4rem] gap-[2px] flex justify-center items-center bg-base-100 border border-btnColor text-btnColor font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
                                                <TbHeartMinus size='1.2rem' />
                                                <p className='addtowish'>
                                                    Remove from Wishlist
                                                </p>
                                            </button>
                                        )
                                        :
                                        (

                                            <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[4px] h-[3rem] landscape:h-[2.5rem] md:h-[4rem] gap-[4px] flex justify-center items-center bg-btnColor text-white font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
                                                <TbHeartPlus size='1.2rem' />
                                                <p className='addtowish'>
                                                    Add to Wishlist
                                                </p>
                                            </button>
                                        )
                                }
                            </div>

                            {/* add to wishlist button for 1000px and larger displays... */}
                            <div id='addToWish' className='add-to-wish hidden lg:block landscape:block lg:justify-start gap-[10vw]'>
                                {
                                    isItemInWishlist ?
                                        (
                                            <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[4px] gap-[2px] flex justify-center items-center bg-base-100 border border-btnColor text-btnColor font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
                                                <TbHeartMinus size='1.2rem' />
                                                <p className='addtowish'>
                                                    Remove from Wishlist
                                                </p>
                                            </button>
                                        )
                                        :
                                        (

                                            <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[4px] gap-[4px] flex justify-center items-center bg-btnColor text-white font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
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
            </div>
        </section>
    )
}

export default SingleProductPage