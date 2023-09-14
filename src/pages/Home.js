import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ShopSection from '../components/ShopSection'

const HomePage = () => {
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