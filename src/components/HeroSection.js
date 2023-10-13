import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className="hero-section bg-base-100 mb-[4rem] landscape:h-screen sm:h-screen sm:mb-0 lg:mb-[4rem]">
                <div className="hero-container flex flex-col landscape:flex-row-reverse landscape:items-center gap-6 md:gap-12 lg:gap-3 lg:flex-row-reverse items-center">
                    <div className='image-wrapper basis-[40%] lg:basis-[50%] w-full'>
                        <img src="/images/heroImage2.jpg" alt='hero image' className="her0-image w-full h-[45vh] md:h-[53vh] lg:h-[90vh] landscape:h-screen object-cover rounded-lg" />
                    </div>
                    <div className='basis-[60%] lg:basis-[50%] px-[1.1rem] md:px-[2rem] lg:px-[3rem] landscape:text-start md:text-center lg:text-start'>
                        <div className='hero-text flex flex-col justify-around landscape:gap-y-0 md:gap-y-[4rem] lg:gap-y-2'>
                            <h1 className="text-[2.5rem] leading-[3rem] font-bold">
                                Kojohwo Global Services
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <a href='#shopsection' className='w-fit mx-auto lg:mx-0 landscape:mx-0'>
                                <button className="btn btn-secondary bg-btnColor text-white border-none">
                                    Explore Products
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection