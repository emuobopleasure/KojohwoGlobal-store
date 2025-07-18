import React from 'react'

const HeroSection = () => {
    return (
       <section>
  <div className="hero-section bg-base-100 mb-[4rem] sm:mb-0 lg:mb-[4rem]">
    <div className="hero-container flex flex-col items-center gap-6 md:gap-12 lg:gap-3 lg:flex-row-reverse lg:items-center md:px-[2rem] lg:px-[3rem]
      [@media(orientation:landscape)]:flex-row-reverse">

      {/* Image */}
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-[70vh] md:h-fit lg:h-fit landscape:pr-[1.1rem]">
        <img
          src="/images/heroImage2.jpg"
          alt="Hero visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text */}
      <div className="w-full sm:w-1/2 text-center sm:text-left flex items-center h-full px-[1.1rem]">
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug font-bold text-gray-700">
            Trusted Household Products for Your Everyday Needs
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 leading-relaxed">
            Discover top-quality household and personal care products from ultra-soft toilet tissue to trusted baby diapers.
          </p>
          <a href="#featuredProducts" className="w-fit mx-auto sm:mx-0">
            <button className="btn btn-secondary bg-btnColor text-white border-none text-sm sm:text-base">
              Shop Now
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
