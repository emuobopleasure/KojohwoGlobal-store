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
                            <button className='back-home btn btn-neutral text-white rounded-full font-normal text-[85%] md:text-[65%] lg:text-[1rem] xl:text-[1.5rem]'>
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