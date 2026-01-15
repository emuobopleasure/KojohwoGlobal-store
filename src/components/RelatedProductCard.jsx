import React from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';

const RelatedProductCard = ({ item }) => {
    return (
        <article className='w-auto'>
            <div className="flex justify-center items-center w-auto cursor-pointer">
                <div className="card bg-base-100 shadow-2xl hover:shadow-xl h-[17rem] rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row w-[12rem] sm:h-52 sm:w-auto md:w-[43vw] lg:w-[18rem] xl:lg:w-[23rem] transition ease-in-out delay-50 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                    <Link to={`/products/${item.id}-${item.slug}`} className='image-wrapper overflow-hidden h-1/2 w-full sm:h-full sm:w-1/2'>
                        <img className="object-cover h-full w-full" src={item.image} alt={item.name} />
                    </Link>
                    <div className="card-buttom flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-4 sm:h-full sm:items-baseline sm:w-1/2 sm:gap-[2rem]">
                        <Link to={`/products/${item.id}-${item.slug}`} className='w-full flex flex-col items-start gap-3 sm:gap-4'>
                            <h1 className="text-base font-extrabold mb-0 text-gray-600 font-sans truncate w-full">
                                {item.name}
                            </h1>
                            <p className="text-xs text-gray-500 line-clamp-3 md:line-clamp-5 w-4/5">
                                {item.description}
                            </p>
                            <h1 className="font-bold text-gray-500">₦{item.price}</h1>
                        </Link>
                        {/* <div className="w-full mx-auto md:mx-0">
                            <Link to={`/products/${item.id}-${item.slug}`}>
                                <button className="w-full px-[6px] py-[5px] gap-[2px] flex justify-center items-center bg-neutral text-white font-medium text-[63%] md:text-[0.8rem] lg:text-[60%] xl:text-sm leading-snug capitalize rounded-full shadow-md hover:bg-[#ae2c00] focus:bg-[#ae2c00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg=[#ae2c00] active:shadow-lg transition duration-150 ease-in-out">
                                    <IoEyeOutline size='1.2rem' />
                                    <p>
                                        View Product
                                    </p>
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default RelatedProductCard;