import React, { useContext } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';

const FeaturedCategories = () => {

    const { initialCategories } = useContext(AppContext)

    // const handleCategoryClick = (slug) => {
    //     navigate(`/products?category=${slug}`)
    // }

    return (
        <section id='featuredCategories' className='section-wrapper px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-16 mb-[4rem]'>
            <div className='shop-by-categories mb-8'>
                <h2 className="text-[22px] font-bold text-center leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    Shop by Category
                </h2>
            </div>

            {/* Responsive Grid Container */}
            <div className='featured-categories grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 xl:gap-9 justify-items-center'>
                {initialCategories.map((category) => (
                    <Link
                        key={category.id}
                        to={`/products?category=${category.slug}`}
                        className='w-full max-w-[160px] lg:max-w-[170px]'
                    >
                        <article className='category-card rounded-3xl bg-base-100 shadow-lg group cursor-pointer border-gray-200 border-2 w-full hover:shadow-2xl transition-all duration-300 ease-in-out'>

                            {/* Image Container */}
                            <div className='image-wrapper h-32 w-full sm:h-36 lg:h-40 overflow-hidden rounded-2xl p-1'>
                                <div className='h-full w-full overflow-hidden rounded-2xl'>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className='h-full w-full object-cover transition-transform ease-out duration-300 group-hover:scale-110'
                                    />
                                </div>
                            </div>

                            {/* Card Bottom */}
                            <div className='card-bottom mt-4 mb-[4px] flex items-center justify-between px-[4px] border border-accent rounded-2xl w-[93%] mx-auto group-hover:bg-accent transition-colors duration-300 ease-in-out py-[2px]'>
                                <h3 className='text-accent text-sm sm:text-base group-hover:text-base-100 transition-colors duration-300 ease-in-out truncate pr-2'>
                                    {category.name}
                                </h3>
                                <div className='flex-shrink-0'>
                                    <GoArrowRight
                                        size={'1.2rem'}
                                        className='border border-base-100 rounded-lg p-[1px] text-base-100 bg-accent group-hover:scale-110 transition-all ease-out duration-300'
                                    />
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* View All Categories Link */}
            <div className="text-center mt-8">
                <Link
                    to="/products"
                    className="inline-flex items-center px-6 py-2 text-accent shadow-lg border border-accent rounded-full hover:bg-accent hover:text-base-100 transition-all duration-300 ease-in-out font-medium"
                >
                    View All Products
                    <GoArrowRight className="ml-2" size="1.1rem" />
                </Link>
            </div>
        </section>
    );
};

export default FeaturedCategories;