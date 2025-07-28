import React from 'react'
import { MdOutlineCategory } from 'react-icons/md';
import { PiHandbag } from "react-icons/pi";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/images/heroImage16.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl mx-auto text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Everything You Need in One Place
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Shop articles, kiddies items, toiletries, stationery, and more at unbeatable prices.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:items-center gap-4">
          <Link to='/products' className=''>
            <button className="btn btn-neutral text-white border-1 border-neutral text-sm sm:text-base rounded-full shadow-xl flex items-center justify-center px-16 w-full">
              <PiHandbag size={'1.5rem'} />
              Shop Now
            </button>
          </Link>
          <a href='#featuredProducts'>
            <button className="btn btn-neutral btn-outline font-bold shadow-md rounded-full px-8 border-1 border-white text-white hover:bg-white hover:text-[#c93400] hover:border-neutral w-full">
              <MdOutlineCategory size={'1.5rem'} />
              Explore Categories
            </button>
          </a>
        </div>
      </div>
    </section>


  )
}

export default HeroSection
