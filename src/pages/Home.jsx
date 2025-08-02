import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/NewsLetter';
import FeaturedCategories from '../components/FeaturedCategories';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {

  window.scrollTo(0, 0);

  return (
    <>
      <Helmet>
        <title>Kojohwo Global — Affordable Gifts & Everyday Essentials</title>
        <meta name="description" content="Discover a variety of quality products from gifts, kiddies items, to school and home essentials at Kojohwo Global. Enjoy the best prices and fast delivery." />

        {/* Open Graph */}
        <meta property="og:title" content="Kojohwo Global — Affordable Gifts & Everyday Essentials" />
        <meta property="og:description" content="Discover quality items across gifts, kiddies supplies, and daily needs at amazing prices." />
        <meta property="og:image" content="https://kojohwoglobal.vercel.app/og/homepage-preview.webp" />
        <meta property="og:image" content="https://kojohwoglobal.vercel.app/og/homepage-preview.jpg" />
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="586" /> */}
        {/* <meta property="og:image:type" content="image/webp" /> */}

        <meta property="og:url" content="https://kojohwoglobal.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Kojohwo Global — Affordable Gifts & Essentials" />
        <meta name="twitter:description" content="Your one-stop shop for party supplies, books, toiletries, and more." />
        <meta name="twitter:image" content="https://kojohwoglobal.vercel.app/og/homepage-preview.webp" />
        <meta name="twitter:image" content="https://kojohwoglobal.vercel.app/og/homepage-preview.jpg" />
        {/* <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="586" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <section>
        <div className='homesection mt-[4rem]'>
          <HeroSection />
          {/* <FeaturedCategories/> */}
          <FeaturedProducts />
          <Newsletter />
        </div>
      </section>
    </>
  )
}

export default HomePage