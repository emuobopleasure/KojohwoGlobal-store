import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../ProductsData'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb';
import { BsArrowLeft } from 'react-icons/bs';
import { AppContext } from '../context/appContext';
import { Helmet } from 'react-helmet-async';


const SingleProductPage = () => {



    const { handleWishlistButtonClick, wishlist } = useContext(AppContext)

    const { idSlug } = useParams()

    const id = idSlug.split("-")[0]

    const item = products.find((p) => p.id === parseInt(id))

    const getProductKey = (item) => `${item.id}-${item.slug}`

    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.key === getProductKey(item));


    const navigate = useNavigate()

    const [showButton, setShowButton] = useState(false);

    const phone = '+2347061171410';
    const whatsappMessage = `Hi, I want to buy “${item.name}” (₦${item.price}). Is it in stock? Please send me the payment info and delivery timeline.

${`https://kojohwoglobal.vercel.app/products/${item.id}-${item.slug}`}`;


    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;



    const handleScroll = () => {
        const yOffset = window.scrollY

        if (yOffset > 150) {
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
        <>
            <Helmet>
                <title>{item.name} - Kojohwo Global</title>
                <meta property="og:title" content={item.name} />
                <meta property="og:description" content={`Buy ${item.name} now for ₦${item.price} at Kojohwo Global`} />
                <meta property="og:image" content={`https://kojohwoglobal.vercel.app${item.image}`} />
                <meta property="og:url" content={`https://kojohwoglobal.vercel.app/products/${item.id}`} />
                <meta property="og:type" content="product" />

                {/* ...open graph tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={item.name} />
                <meta name="twitter:description" content={`Buy ${item.name} now for ₦${item.price}`} />
                <meta name="twitter:image" content={`https://kojohwoglobal.vercel.app${item.image}`} />
            </Helmet>
            <section>
                <div className="single-item text-gray-700 h-screen landscape:overflow-y-scroll hidden-scroll body-font bg-base-100 mt-[7.3vh] mb-4 md:mt-20">
                    <div className="container py-2 md:py-12 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap landscape:flex-nowrap landscape:items-center">
                            <div className='image-wrapper w-full lg:w-1/2 lg:h-full'>
                                <img alt={item.name} className="product-image w-full h-full lg:h-full max-h-[20rem] md:max-h-[28rem] md:h-[28rem] object-scale-down md:object-contain object-center rounded-bl-2xl rounded-br-2xl md:rounded relative" src={item.image} />
                            </div>

                            {/* arrow button that navigates to the previously active route */}
                            
                            <button onClick={() => navigate(-1)} className='back-link fixed lg:hidden ml-[1rem] top-[4.3rem] p-[10px] rounded-[40%] border-[1px] border-[#374151] bg-base-100'>
                                <BsArrowLeft size='1.2rem' />
                            </button>
                            
                            <div className="lg:w-1/2 w-full px-[1.1rem] md:px-[2rem] lg:px-[3rem] lg:pl-10 lg:py-6 mt-6 lg:mt-0 lg:flex flex-col justify-between gap-4">
                                {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                                <h1 className="product-name text-gray-600 text-3xl title-font font-medium mb-2">{item.name}</h1>
                               
                                <p className="leading-relaxed">{item.description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-between gap-[6vw]">
                                    <div className="title-font font-medium text-2xl text-gray-900">₦{item.price}</div>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chat-to-order inline-flex items-center gap-2 px-6 py-2.5 bg-[#1DA851] text-white text-sm font-semibold rounded-full hover:bg-[#168E41] transition duration-300 shadow"
                                        aria-label="Chat on WhatsApp"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M20.52 3.48A11.86 11.86 0 0012.08.003 11.79 11.79 0 000 11.69a11.8 11.8 0 001.67 6.06L.05 24l6.46-1.68a11.9 11.9 0 0017.49-9.85 11.81 11.81 0 00-3.48-8.99zM12.07 21.4a9.63 9.63 0 01-5.13-1.45l-.37-.22-3.83 1 .95-3.73-.24-.38a9.63 9.63 0 1117.26-6.68 9.64 9.64 0 01-9.64 9.45zm5.49-7.18c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.64.07a7.94 7.94 0 01-2.36-1.46 8.8 8.8 0 01-1.63-2.01c-.17-.3-.02-.46.13-.61s.3-.35.45-.52a2.07 2.07 0 00.3-.52c.07-.15.02-.37-.07-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.5-.5-.67-.51h-.57a1.1 1.1 0 00-.8.37c-.27.3-1.04 1.01-1.04 2.46s1.07 2.85 1.23 3.05a9.65 9.65 0 004.03 3.18 4.3 4.3 0 002.69.44c.82-.12 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42s-.27-.22-.57-.37z" />
                                        </svg>
                                        Chat to Order
                                    </a>
                                </div>
                                {/* add to wishlist buttons for mobile and tablet displays */}
                                <div id='addToWish' className={`add-to-wish lg:hidden landscape:hidden ${showButton ? 'gap-[10vw]' : ' fixed bottom-2 right-4 left-4 md:right-8 md:left-8'}`}>
                                    {
                                        isItemInWishlist ?
                                            (
                                                <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[4px] h-[3rem] landscape:h-[2.5rem] md:h-[4rem] gap-[2px] flex justify-center items-center bg-base-100 border border-neutral text-neutral font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-xl hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:text-white active:shadow-lg transition duration-150 ease-in-out">
                                                    <TbHeartMinus size='1.2rem' />
                                                    <p className='addtowish'>
                                                        Remove from Wishlist
                                                    </p>
                                                </button>
                                            )
                                            :
                                            (

                                                <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[4px] h-[3rem] landscape:h-[2.5rem] md:h-[4rem] gap-[4px] flex justify-center items-center bg-neutral text-white font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:bg-[#ae2c00] hover:shadow-lg focus:bg-[#ae2c00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:shadow-lg transition duration-150 ease-in-out">
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
                                                <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[6px] gap-[2px] flex justify-center items-center bg-base-100 border border-neutral text-neutral font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-xl hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:text-white active:shadow-lg transition duration-150 ease-in-out">
                                                    <TbHeartMinus size='1.2rem' />
                                                    <p className='addtowish'>
                                                        Remove from Wishlist
                                                    </p>
                                                </button>
                                            )
                                            :
                                            (

                                                <button onClick={() => handleWishlistButtonClick(item)} className="w-full px-[6px] py-[7px] gap-[4px] flex justify-center items-center bg-neutral text-white font-medium text-[79%] md:text-lg leading-snug capitalize rounded-full shadow-md hover:bg-[#ae2c00] hover:shadow-lg focus:bg-[#ae2c00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:shadow-lg transition duration-150 ease-in-out">
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
        </>
    )
}

export default SingleProductPage