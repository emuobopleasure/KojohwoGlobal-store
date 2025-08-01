import React from 'react'

const FeaturedCategories = () => {
    return (
        <section className='section-wrapper px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-16 mb-[4rem]'>
            <div className='shop-by-categories'>
                <h2 class="text-[22px] font-bold text-center leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Shop by Category</h2>
            </div>
            <div className='featured-categories gap-6 p-4 flex'>
                <div className='category-card bg-gray-200 rounded-2xl pb-2'>
                    <div className='image-wrapper h-40 w-40 overflow-hidden rounded-2xl'>
                        <img src='https://lh3.googleusercontent.com/aida-public/AB6AXuCh2Ycg0zXKaEONRrc30bEb96Z6WRBc0iXwbWmDep9TwVSrcTH_qd8YHzB9PtnKw71b3MWxO9UEwNBgUSaXIHzb5sDD9kRNQM0dNaF04TD1w79oigUGMZv4ghZoA8T9ssGXbObkRfbepe_iWDzrZb4rSaeqccCFCP9ebqDqKxwyRc85k1XYcBpN8g_OIZ7GFduoOZDUayrfR4on_o_jyDSouFZjSH2_jvRN0UTYJ6w5XXf0gvM3iw0jh3anFqu4rPfG2k1KkLyyTNTd' alt='Aricles' className='Articles h-full w-full object-cover transition-transform ease-out duration-300 hover:scale-110'/>
                    </div>
                    <h3 className='mt-2 px-3'>
                        Articles
                    </h3>
                </div>
                <div className='category-card bg-gray-200'>
                    <div className='image-wrapper h-40 w-40 overflow-hidden rounded-2xl'>
                        <img src='https://lh3.googleusercontent.com/aida-public/AB6AXuCh2Ycg0zXKaEONRrc30bEb96Z6WRBc0iXwbWmDep9TwVSrcTH_qd8YHzB9PtnKw71b3MWxO9UEwNBgUSaXIHzb5sDD9kRNQM0dNaF04TD1w79oigUGMZv4ghZoA8T9ssGXbObkRfbepe_iWDzrZb4rSaeqccCFCP9ebqDqKxwyRc85k1XYcBpN8g_OIZ7GFduoOZDUayrfR4on_o_jyDSouFZjSH2_jvRN0UTYJ6w5XXf0gvM3iw0jh3anFqu4rPfG2k1KkLyyTNTd' alt='Aricles' className='Articles h-full w-full object-cover transition-transform ease-out duration-300 hover:scale-110'/>
                    </div>
                    <h3 className='mt-2'>
                        Articles
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCategories