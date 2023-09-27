import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../appContext'

const Categories = ({handleCategoryClick}) => {

    const { selectedCategory, setSelectedCategory, categories, categoryIcons } = useContext(AppContext)
    // const [isLoading, setIsLoading] = useState(false)

    // const handleCategoryClick = (category) => {
    //     setIsLoading(true)

    //     // Simulate a delay for filtering (you can replace this with your actual filtering logic)
    //     setTimeout(()=> {
    //         setSelectedCategory(category)
    //         setIsLoading(false)
    //     }, 1000)
    // }
    // const [sticky, setSticky] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar = document.getElementById('catee');
    //         if (navbar) {
    //             const offset = navbar.offsetTop;
    //             setSticky(window.scrollY >= offset);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);



    return (
        <article>
            {/* mobile screen categories */}
            <div id='catee' className='categ px-[1.1rem] md:px-[2rem] lg:px-[3rem] z-10'>
                <div className='categories mx-auto my-4'>
                    <ul className='categories-list text-gray-700 text-sm flex justify-start whitespace-nowrap items-center md:justify-evenly gap-2 overflow-auto'>
                        <li >
                            <button
                                onClick={() => handleCategoryClick(null)} className={selectedCategory ? `btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1` : `btn-glass bg-btnColor text-white border px-[0.8rem] py-[0.5rem] rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1`}>
                                <span>
                                    <i className="fa-solid fa-house-chimney"></i>
                                </span>
                                <span>
                                    All Products
                                </span>
                            </button>
                        </li>
                        {categories.map((category) => (
                            <li key={category}
                                onClick={() => handleCategoryClick(category)} >
                                <button className={selectedCategory === category ? `btn-glass bg-btnColor text-white border px-[0.8rem] py-[0.5rem] rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1` : `btn-glass bg-none border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1`}>
                                    {
                                        categoryIcons[category] && (
                                            <span>
                                                <i className={`fa solid ${categoryIcons[category]}`} />
                                            </span>
                                        )
                                    }
                                    {category}
                                </button>
                            </li>
                        ))}
                        {/* <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-toilet-paper"></i>
                                </span>
                                <span>
                                    Toilet Tissues
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-baby"></i>
                                </span>
                                <span>
                                    Diapers
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-globe"></i>
                                </span>
                                <span>
                                    Norland Products
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-sun"></i>
                                </span>
                                <span>
                                    Sunlit Products
                                </span>
                            </button>
                        </li> */}

                    </ul>
                </div>
            </div>

            {/* large screens categories */}
            {/* <div className='categ px-[1.1rem] md:px-[2rem] lg:px-[3rem] hidden lg:block'>
                <div className='categories min-w-fit mx-auto my-4 w-max'>
                    <ul className='categories-list text-gray-700 text-sm flex justify-center md:justify-evenly gap-2 flex'>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-toilet-paper"></i>
                                </span>
                                <span>
                                    All Items
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-toilet-paper"></i>
                                </span>
                                <span>
                                    Toilet Tissues
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-baby"></i>
                                </span>
                                <span>
                                    Diapers
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-house-chimney"></i>
                                </span>
                                <span>
                                    All Purpose
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-globe"></i>
                                </span>
                                <span>
                                    Norland Products
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-glass border px-[0.8rem] py-[0.5rem] border-gray-500 rounded-full hover:bg-btnColor hover:text-white hover:border-white flex gap-1">
                                <span>
                                    <i className="fa-solid fa-sun"></i>
                                </span>
                                <span>
                                    Sunlit Products
                                </span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div> */}
        </article>
    )
}

export default Categories