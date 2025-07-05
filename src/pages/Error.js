import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section>
            <div className='error-page mt-[3rem] px-[1.1rem] md:px-[2rem] lg:px-[3rem]'>
                <div className='image-wrapper'>

                </div>
                <div className='error-context flex flex-col items-center justify-evenly gap-[4rem]'>
                    <div>
                        <p className='404 text-9xl text-gray-600'>
                            404
                        </p>
                    </div>
                    <div>
                        <p className='opps font-semibold text-gray-600 text-lg'>
                            Opps, the page you're looking for does not exist.
                        </p>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className='back-home px-[1rem] py-[0.5rem] gap-[2px] flex justify-center items-center bg-bg-base-100 border border-btnColor text-btnColor font-normal text-[85%] md:text-[65%] lg:text-[1rem] xl:text-[1.5rem] leading-snug capitalize rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out hover:bg-btnColor hover:text-white'>
                                Go back to our Homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error