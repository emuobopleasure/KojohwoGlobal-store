import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../context/appContext'
import { useLocation } from 'react-router-dom'

const Categories = () => {
  const {
    selectedCategory,
    categories,
    handleCategoryClick,
    showStickyCategories,
    setShowStickyCategories,
  } = useContext(AppContext)

  const categoryRefs = useRef({})

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      if (location.pathname === '/products') {
        setShowStickyCategories(scrollY > 120)
      } else {
        setShowStickyCategories(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      setShowStickyCategories(false)
    }
  }, [location.pathname, setShowStickyCategories])

  useEffect(() => {
    const scrollToActiveCategory = () => {
      const activeRef = categoryRefs.current[selectedCategory];
      if (activeRef) {
        activeRef.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    };

    if (showStickyCategories) {
      const timeout = setTimeout(scrollToActiveCategory, 100);
      return () => clearTimeout(timeout);
    } else {
      scrollToActiveCategory();
    }
  }, [selectedCategory, showStickyCategories]);



  const categoryList = (
    <ul className="categories-list text-gray-700 text-sm flex justify-between whitespace-nowrap items-center md:justify-evenly gap-2 overflow-auto">
      <li className='mb-[2px]'>
        <button
          onClick={() => handleCategoryClick('All Categories')}
          className={`all-categories-btn items-center border px-[0.8rem] py-[0.5rem] ${selectedCategory === 'All Categories' ? 'bg-accent py-[0.85rem] text-white' : 'border-gray-400'
            } rounded-full lg:hover:bg-accent lg:hover:text-white lg:hover:border-accent font-semibold flex gap-1`}
        >
          <i className="fa-solid fa-house-chimney" />
          <span>All Products</span>
        </button>
      </li>

      {categories.map((category) => (
        <li className='mb-[2px]'
          key={category.slug}
          ref={(el) => (categoryRefs.current[category.slug] = el)}
        >
          <button
            onClick={() => handleCategoryClick(category.slug)}
            className={`categories-btn items-center px-[0.8rem] py-[0.5rem] font-semibold rounded-full flex gap-1 ${selectedCategory === category.slug
                ? 'bg-accent py-[0.85rem] text-white border'
                : 'bg-none border border-gray-400'
              } lg:hover:bg-accent lg:hover:text-white lg:hover:border-white`}
          >
            {category.icon && <i className={`fa-solid ${category.icon}`} />}
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <article className='w-full'>
      {/* Sticky version */}
      {showStickyCategories && (
        <div className="sticky-categoriess px-[1.1rem] md:px-[2rem] lg:px-[3rem] z-10 py-3">
          {categoryList}
        </div>
      )}

      {/* Default version */}
      {!showStickyCategories && (
        <div className="non-sticky px-[1rem] md:px-[2rem] lg:px-[3rem] my-8 lg:my-12 border border-gray-300 rounded-3xl py-4">{categoryList}</div>
      )}
    </article>
  )
}

export default Categories
