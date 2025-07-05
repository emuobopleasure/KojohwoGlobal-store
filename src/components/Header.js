import React, { useContext, useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdOutlineContactPhone } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaYoutube, } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscHome } from 'react-icons/vsc';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import SearchForm from './SearchForm';
import { AppContext } from '../context/appContext';
import Categories from './Categories';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const { showStickyCategories } = useContext(AppContext)


    const handleToggle = () => {
        setShowSearch((prevState) => !prevState)
    }

    const { wishlist } = useContext(AppContext)

    const wishListLength = wishlist.length




    return (
        <header>
            <nav className='nav-wrapper flex justify-center'>
                <div className={showSearch ? `navbar bg-base-100 shadow-lg rounded-3xl fixed top-0 z-10 flex flex-col items-start px-[1.1rem] md:px-[2rem] lg:px-[3rem] pb-[3px]` : 'navbar bg-base-100 min-h-[4rem] lg:min-h-[4rem] shadow-lg rounded-3xl fixed top-0 z-10 flex flex-col items-start px-[1.1rem] md:px-[2rem] lg:px-[3rem] pb-[3px] xl:max-w-[90rem] xl:mx-auto'}>
                    <div className={showSearch ? `navbar nav-wrapper flex items-center justify-between h-[2rem] min-h-0 p-0`
                        : `navbar nav-wrapper flex items-center justify-between h-[3rem] min-h-0 p-0
                    `}>
                        <div className='logo/menu nav inline-flex gap-[1.2rem] items-center'>
                            <div className='hamburger inline-flex lg:hidden'>
                                {!showMenu && <button onClick={() => setShowMenu(true)}
                                    className='menu-opem' aria-label="menu open">
                                    <FiMenu className='menu-icon text-2xl' color='#513f59' />
                                </button>}
                                {showMenu && <button onClick={() => setShowMenu(false)}
                                    className='menu-close' aria-label="menu close">
                                    <IoIosCloseCircleOutline className='menu-close-icon text-2xl' color='#513f59' />
                                </button>}
                            </div>
                            <h1 className="logo inline-flex">
                                <NavLink to="/" className="logo-btn normal-case text-xl px-1 md:text-2xl xl:text-4xl font-['Modak'] font-thin text-btnColor pt-[2px] lg:pt-0">
                                    Kojohwo Global
                                </NavLink>
                            </h1>
                        </div>
                        <div className='navbar-links hidden lg:flex gap-6'>
                            <ul className='flex gap-6'>
                                <li className='home-nav-link hover:transform transition duration-300 hover:scale-110'>
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'home border-b-2 border-btnColor' : 'border-none'}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='contact-nav-link hover:transform transition duration-300 hover:scale-110'>
                                    <NavLink to='/products' className={({ isActive }) => isActive ? 'contact border-b-2 border-btnColor' : 'border-none'}>
                                        Shop
                                    </NavLink>
                                </li>
                                <li className='contact-nav-link hover:transform transition duration-300 hover:scale-110'>
                                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'contact border-b-2 border-btnColor' : 'border-none'}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className='about-nav-link hover:transform transition duration-300 hover:scale-110'>
                                    <NavLink to='/about' className={({ isActive }) => isActive ? 'about border-b-2 border-btnColor' : 'border-none'}>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* |=======profile tabs =========| */}
                        <div className="flex items-center gao-[0.3rem] lg:flex-none pr-[13px]">
                            {
                                !showSearch &&
                                <button onClick={handleToggle} className='search-open lg:hidden' aria-label='Search Open Button'>
                                    <CiSearch className='search-icon pb-[2px] lg:p-0 mr-[0.5rem]' size='1.5rem' color='#513f59' />
                                </button>
                            }
                            {
                                showSearch &&
                                <button onClick={handleToggle} className='search-close lg:hidden' aria-label='Search Close Button'>
                                    <IoIosCloseCircleOutline className='close-icon pb-[2px] lg:p-0 mr-[0.5rem] mb-[0.2rem]' size='1.5rem' color='#513f59' />
                                </button>
                            }

                            {/* |===============theme settings=====| */}
                            {/* <div className='theme-toggle-icons cursor-pointer hidden md:inline-flex'>
                                <span onClick={handleToggle} className="moon-icon hidden tooltip tooltip-bottom" data-tip="Dark Theme">
                                    <i className="fa-solid fa-moon"></i>
                                </span>
                                <div className="tooltip tooltip-bottom" data-tip="hello">
                                    <button className="btn">Hover me</button>
                                </div>
                                <span onClick={handleToggle} className="sun-icon tooltip tooltip-bottom" theme-change="dark" data-tip="Light Theme">
                                    <i className="fa-solid fa-sun"></i>
                                </span>
                            </div> */}
                            {/* |======cart section indicator======== */}
                            <div className="dropdown dropdown-end">
                                {/* |======cart icon======== */}
                                <label tabIndex={0} className="wishlist-btn btn btn-ghost btn-circle w-[1rem] h-full min-h-[1.5rem]">
                                    <div className="indicator">
                                        <AiOutlineHeart size='1.2rem' color='#513f59' />
                                        <span className="badge badge-sm indicator-item">{wishListLength}</span>
                                    </div>
                                </label>
                                {/* |======cart icon indicator======== */}
                                <div tabIndex={0} className="mt-3 card card-compact dropdown-content items-center p-[0.1rem] w-36 bg-base-100 shadow z-10">
                                    <div className="card-body">
                                        <span className="font-bold text-lg text-gray-600">{wishListLength} Items</span>
                                        {/* <span className="text-gray-600">Subtotal: $999</span> */}
                                        <div className="card-actions">
                                            <Link to='/wishlist'>
                                                <Button
                                                    text='View Wishlist' styling='text-[10px] px-[10px] py-[4px]'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* |======profile icon indicator======== */}
                            {/* <div className="user-avatar dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-[1rem] h-[1rem]">
                                    <div className="w-10 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/profile'>
                                            Profile
                                        </Link>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li>
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    {/* |===============search form===========| */}
                    {showSearch &&
                        <SearchForm formStyle='w-full my-[0.25rem] bg-[btnColor]' inputStyle='h-[2rem] md:h-[2.2rem] lg:h-[2.3rem] focus:outline-transparent text-[0.8rem] py-[3px]' btnStyle='w-[1.9rem] md:w-[2.2rem] min-h-[2rem] h-[2rem] md:min-h-[2.2rem] md:h-[2.2rem] lg:min-h-[2.3rem] lg:h-[2.3rem]' />
                    }
                    <SearchForm formStyle='desktop-search hidden lg:flex w-full my-[0.25rem] bg-[btnColor]' inputStyle='h-[2rem] md:h-[2.2rem] lg:h-[2.3rem] focus:outline-transparent text-[0.8rem] py-[3px]' btnStyle='w-[1.9rem] md:w-[2.2rem] min-h-[2rem] h-[2rem] md:min-h-[2.2rem] md:h-[2.2rem] lg:min-h-[2.3rem] lg:h-[2.3rem]' />

                    {showStickyCategories && (
                        <div className="headr-categories w-full">
                            <Categories />
                        </div>
                    )}

                    {/* !================mobile menu========! */}
                    <div className={showMenu ? 'hamburger-menu w-full' : 'hidden'}>
                        <ul tabIndex={0} className="menu pl-0 pr-0 menu-vertical leading-10 text-[1rem] gap-[1.5rem] dropdown-content pt-[1.5rem] bg-base-100 rounded-box w-screen h-auto z-10 landscape:h-auto landscape:grid landscape:grid-cols-2 landscape:place-content-start">
                            {/* <li>
                                <div className='theme-toggle-icons cursor-pointer'>
                                    <span className="moon-icon hidden">
                                        <i className="fa-solid fa-moon"></i>
                                        <span className='ml-2'>
                                            Dark Theme
                                        </span>
                                    </span>
                                    <span className="sun-icon">
                                        <i className="fa-solid fa-sun"></i>
                                        <span className='ml-3'>
                                            Light Theme
                                        </span>
                                    </span>
                                </div>
                            </li> */}
                            <li onClick={() => setShowMenu(false)}>
                                <NavLink to='/' className='mobile-nav-link landscape:bg-[#c9c4c4]'>
                                    <span>
                                        <VscHome />
                                    </span>
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={() => setShowMenu(false)}>
                                <NavLink to='/products' className='mobile-nav-link landscape:bg-[#c9c4c4]'>
                                    <span>
                                        <HiOutlineShoppingBag />
                                    </span>
                                    Shop
                                </NavLink>
                            </li>
                            <li onClick={() => setShowMenu(false)}>
                                <NavLink to='/contact' className='mobile-nav-link landscape:bg-[#c9c4c4]'>
                                    <span>
                                        <MdOutlineContactPhone />
                                    </span>
                                    Contact
                                </NavLink>
                            </li>
                            <li onClick={() => setShowMenu(false)}>
                                <NavLink to='/about' className='mobile-nav-link landscape:bg-[#c9c4c4]'>
                                    <span>
                                        <BsInfoCircleFill />
                                    </span>
                                    About
                                </NavLink>
                            </li>
                            <div className='social-links cursor-default '>
                                <div className='mobile-nav-link social-links gap-4 px-4 mobile-nav-link landscape:bg-[#c9c4c4] h-[3.4rem] flex items-center justify-between cursor-text rounded-[2rem]'>
                                    <a href='https://wa.me/message/WRKSVZP2GDD7K1' className='whatsapp p-[10px] rounded-[40%] border-[1px] border-[#291334]'>
                                        <RiWhatsappFill size='1.2rem' />
                                    </a>
                                    <a href='https://facebook.com/profile.php/?id=100003626663302&_rdc=1&_rdr' className='facebook p-[10px] rounded-[40%] border-[1px] border-[#291334]'>
                                        <FaFacebookF />
                                    </a>
                                    <a href='https://twitter.com' className='instagram p-[10px] rounded-[40%] border-[1px] border-[#291334]'>
                                        <FaTwitter />
                                    </a>
                                    <a href='https://youtube.com' className='tiktok p-[10px] rounded-[40%] border-[1px] border-[#291334]'>
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header