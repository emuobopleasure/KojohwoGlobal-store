import React from 'react'

const Categories = () => {
    return (
        <article>
            {/* mobile screen categories */}
            <div className='categ px-[1.1rem] md:px-[2rem] lg:px-[3rem] lg:hidden'>
                <div className='categories min-w-fit mx-auto my-4 w-max overflow-x-scroll'>
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
            </div>

            {/* large screens categories */}
            <div className='categ px-[1.1rem] md:px-[2rem] lg:px-[3rem] hidden lg:block'>
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
            </div>
        </article>
    )
}

export default Categories