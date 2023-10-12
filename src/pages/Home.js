import React from 'react'
import HeroSection from '../components/HeroSection'
import ShopSection from '../components/ShopSection'

const HomePage = () => {

    window.scrollTo(0, 0);
  
  return (
    <section>
      <div className='homesection mt-[4rem]'>
        <HeroSection />
        <ShopSection/>
      </div>
    </section>
  )
}

export default HomePage