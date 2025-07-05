import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../context/appContext'
import { useLocation } from 'react-router-dom'

const Categories = () => {
  const {
    selectedCategory,
    categories,
    categoryIcons,
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
        setShowStickyCategories(scrollY > 100)
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
      <li>
        <button
          onClick={() => handleCategoryClick('All Categories')}
          className={`all-categories-btn items-center border px-[0.8rem] py-[0.5rem] ${selectedCategory === 'All Categories' ? 'bg-btnColor text-white' : 'border-gray-500'
            } rounded-full lg:hover:bg-btnColor lg:hover:text-white lg:hover:border-white flex gap-1`}
        >
          <i className="fa-solid fa-house-chimney" />
          <span>All Products</span>
        </button>
      </li>

      {categories.map((category) => (
        <li key={category}
          ref={(el) => (categoryRefs.current[category] = el)}
        >
          <button
            onClick={() => handleCategoryClick(category)}
            className={`categories-btn items-center px-[0.8rem] py-[0.5rem] rounded-full flex gap-1 ${selectedCategory === category
              ? 'bg-btnColor text-white border'
              : 'bg-none border border-gray-500'
              } lg:hover:bg-btnColor lg:hover:text-white lg:hover:border-white`}
          >
            {categoryIcons[category] && <i className={`fa-solid ${categoryIcons[category]}`} />}
            {category}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <article className='w-full'>
      {/* Sticky version */}
      {showStickyCategories && (
        <div className="sticky-categoriess px-[1.1rem] md:px-[2rem] lg:px-[3rem] z-10 pb-1">
          {categoryList}
        </div>
      )}

      {/* Default version */}
      {!showStickyCategories && (
        <div className="non-sticky px-[1.1rem] md:px-[2rem] lg:px-[3rem] my-4">{categoryList}</div>
      )}
    </article>
  )
}

export default Categories
