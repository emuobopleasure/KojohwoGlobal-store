import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {

    window.scrollTo(0, 0);
  
  return (
    <section>
      <div className='homesection mt-[4rem]'>
        <HeroSection />
        <FeaturedProducts/>
        {/* <ShopSection/> */}
      </div>
    </section>
  )
}

export default HomePage