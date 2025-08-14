import React from 'react';
import { Link } from 'react-router-dom';

const TestCateg = () => {
  // Kojohwo Global product categories
  const categories = [
    {
      id: 1,
      name: 'Articles',
      description: 'Quality articles and essential items for daily use',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format',
      productCount: 85,
      slug: 'articles'
    },
    {
      id: 2,
      name: 'Kiddies',
      description: 'Fun and educational items for children of all ages',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
      productCount: 120,
      slug: 'kiddies'
    },
    {
      id: 3,
      name: 'Party/Gift Items',
      description: 'Perfect gifts and party essentials for celebrations',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&auto=format',
      productCount: 95,
      slug: 'party-gift-items'
    },
    {
      id: 4,
      name: 'Back to School Essentials',
      description: 'Everything students need for a successful school year',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&auto=format',
      productCount: 150,
      slug: 'back-to-school'
    },
    {
      id: 5,
      name: 'Books/Stationeries',
      description: 'Books, notebooks and quality stationery supplies',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop&auto=format',
      productCount: 180,
      slug: 'books-stationeries'
    },
    {
      id: 6,
      name: 'Toiletries',
      description: 'Personal care and hygiene products for daily wellness',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop&auto=format',
      productCount: 75,
      slug: 'toiletries'
    }
  ];

  return (
    <section className="px-[1.1rem] md:px-[2rem] lg:px-[3rem] py-12 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto md:mx-0">
            Discover our curated collection across different categories. 
            Find exactly what you're looking for in our organized sections.
          </p>
        </div>

        {/* Categories Grid - matching your products grid layout */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 lg:gap-y-12 md:grid-cols-2 lg:grid-cols-3 2xl:flex 2xl:gap-x-10 2xl:gap-y-14 2xl:justify-between flex-wrap">
          {categories.map((category) => (
            <article key={category.id} className='w-auto'>
              <div className="flex justify-center items-center w-auto cursor-pointer">
                <div className="card bg-base-100 shadow-2xl hover:shadow-xl h-[17rem] rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row w-[12rem] sm:h-52 sm:w-auto md:w-[43vw] lg:w-[18rem] xl:lg:w-[23rem] transition ease-in-out delay-50 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                  
                  {/* Image Section */}
                  <Link 
                    to={`/products?category=${category.slug}`} 
                    className='image-wrapper overflow-hidden h-1/2 w-full sm:h-full sm:w-1/2 relative'
                  >
                    <img 
                      className="object-cover h-full w-full" 
                      src={category.image} 
                      alt={category.name} 
                    />
                    {/* Product Count Badge */}
                    <div className="absolute top-2 right-2">
                      <span className="bg-neutral text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-md">
                        {category.productCount}+ items
                      </span>
                    </div>
                  </Link>

                  {/* Content Section */}
                  <div className="card-buttom flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-4 sm:h-full sm:items-baseline sm:w-1/2 sm:gap-[2rem]">
                    <Link 
                      to={`/products?category=${category.slug}`} 
                      className='w-full flex flex-col items-start sm:gap-4'
                    >
                      <h1 className="text-base font-extrabold mb-0 text-gray-600 font-sans truncate w-full">
                        {category.name}
                      </h1>
                      <p className="text-xs text-gray-500 w-4/5">
                        {category.description}
                      </p>
                    </Link>

                    {/* CTA Button - matching your wishlist button style */}
                    <div className="w-full mx-auto md:mx-0">
                      <Link to={`/products?category=${category.slug}`}>
                        <button className="w-full px-[6px] py-[5px] gap-[2px] flex justify-center items-center bg-neutral text-white font-medium text-[63%] md:text-sm lg:text-[60%] xl:text-sm leading-snug capitalize rounded-full shadow-md hover:bg-[#ae2c00] focus:bg-[#ae2c00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg=[#ae2c00] active:shadow-lg transition duration-150 ease-in-out">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                            />
                          </svg>
                          <p>
                            Shop Category
                          </p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Categories CTA - matching your section styling */}
        <div className="text-center mt-10 md:text-left">
          <Link to="/products">
            <button className="px-8 py-3 bg-transparent border border-neutral text-neutral font-medium text-sm capitalize rounded-full shadow-md hover:bg-neutral hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:text-white active:shadow-lg transition duration-150 ease-in-out">
              View All Products
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 inline" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestCateg;