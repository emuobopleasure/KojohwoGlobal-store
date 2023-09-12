import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdOutlineContactPhone } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaYoutube, FaHome } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import SearchForm from './SearchForm';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)




    return (
        <header>
            <nav className='mb-[6rem] mt-0'>
                <div className="navbar bg-base-100 shadow-lg rounded-3xl fixed top-0 z-10 flex flex-col items-start">
                    <div className='navbar nav-wrapper flex items-center justify-between h-[2rem] min-h-0'>
                        <div className='logo/menu nav inline-flex gap-2 items-center'>
                            <div className='hamburger inline-flex lg:hidden'>
                                {!showMenu && <button onClick={() => setShowMenu(true)}
                                    className='menu-opem'>
                                    <FiMenu className='menu-icon text-xl' />
                                </button>}
                                {showMenu && <button onClick={() => setShowMenu(false)}
                                    className='menu-close'>
                                    <VscClose className='menu-close-icon text-xl' />
                                </button>}
                            </div>
                            <h1 className="logo inline-flex">
                                <NavLink to="/" className="logo-btn normal-case text-sm px-1 md:text-lg font-['Modak'] font-thin text-btnColor">
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
                                    <NavLink to='/contactus' className={({ isActive }) => isActive ? 'contact border-b-2 border-btnColor' : 'border-none'}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className='about-nav-link hover:transform transition duration-300 hover:scale-110'>
                                    <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'about border-b-2 border-btnColor' : 'border-none'}>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* |=======profile tabs =========| */}
                        <div className="flex-none">
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
                                {/* |======cart number indicator======== */}
                                <label tabIndex={0} className="btn btn-ghost btn-circle w-[1rem] h-full min-h-[1.5rem]">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">1</span>
                                    </div>
                                </label>
                                {/* |======cart icon indicator======== */}
                                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-36 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">1 Items</span>
                                        <span className="text-gray-600">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <Link to='/cart'>
                                                <Button
                                                    text='View Cart' styling='px-3 py-1'
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
                    <SearchForm formStyle='w-full my-[0.25rem] bg-[btnColor]' inputStyle='h-[1.5rem] focus:outline-transparent text-[0.8rem] py-[3px]' btnStyle='w-[1.9rem] min-h-[1.5rem] h-[1.5rem]' />
                    {/* !================mobile menu========! */}
                    <div className={showMenu ? 'hamburger-menu' : 'hidden'}>
                        <ul tabIndex={0} className="menu menu-vertical leading-10 dropdown-content p-2 pr-6 bg-base-100 rounded-box w-screen h-auto overflow-scroll z-10 onrotate:h-[60vh] onrotate:overflow-scroll">
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
                            <li>
                                <NavLink to='/'>
                                    <span>
                                        <FaHome />
                                    </span>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contactus'>
                                    <span>
                                        <MdOutlineContactPhone />
                                    </span>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/aboutus'>
                                    <span>
                                        <BsInfoCircleFill />
                                    </span>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <div className='social-links flex gap-4 px-4 cursor-default'>
                                    <NavLink to=''>
                                        <RiWhatsappFill />
                                    </NavLink>
                                    <NavLink to=''>
                                        <FaFacebookF />
                                    </NavLink>
                                    <NavLink to=''>
                                        <FaTwitter />
                                    </NavLink>
                                    <NavLink to=''>
                                        <FaYoutube />
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header