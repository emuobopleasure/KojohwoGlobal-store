import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/NewsLetter';

const HomePage = () => {

    window.scrollTo(0, 0);
  
  return (
    <section>
      <div className='homesection mt-[4rem]'>
        <HeroSection />
        <FeaturedProducts/>
        <Newsletter/>
      </div>
    </section>
  )
}

export default HomePage