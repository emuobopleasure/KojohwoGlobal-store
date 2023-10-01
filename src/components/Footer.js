import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';

const Footer = () => {
    return (
        <footer data-theme="" className='bg-base-300'>
            <div className="footer footer-center p-10  text-gray-700 mt-20 rounded-t-3xl xl:max-w-[90rem] xl:mx-auto">
                <div className="grid grid-flow-col gap-4">
                    <Link to="/about" className="link link-hover mt-[10px]">About Us</Link>
                    <Link to="/contact" className="link link-hover mt-[10px]">Contact Us</Link>
                    {/* <a className="link link-hover">Jobs</a> */}
                    <a href='#top' className='bact-to-top'>
                        <button className='flex items-end gap-[0.3rem]'>
                            <div className="link link-hover">Back to Top</div>
                            <div className='arrow-up p-[5px] rounded-[40%] border-[1px] border-[#374151] hover:text-[white] hover:bg-[#374151]'>
                                <AiOutlineArrowUp size='1.2rem' />
                            </div>
                        </button>
                    </a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://wa.me/message/WRKSVZP2GDD7K1' className='whatsapp p-[10px] rounded-[40%] border-[1px] border-[#374151] hover:text-[white] hover:bg-[#374151]' aria-label='Link to WhatsApp profile'>
                            <RiWhatsappFill size='1.2rem' />
                        </a>
                        <a href='https://facebook.com/profile.php/?id=100003626663302&_rdc=1&_rdr' className='facebook p-[10px] rounded-[40%] border-[1px] border-[#374151] hover:text-[white] hover:bg-[#374151]' aria-label='Link to Facebook profile'>
                            <FaFacebookF size='1.2rem' />
                        </a>
                        <a href='https://twitter.com' className='instagram p-[10px] rounded-[40%] border-[1px] border-[#374151] hover:text-[white] hover:bg-[#374151]' aria-label='Link to Twitter profile'>
                            <FaTwitter size='1.2rem' />
                        </a>
                        {/* <a href='https://www.twitter.com' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href='https://www.youtube.com' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href='https://www.facebook.com' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a> */}
                        {/* <a href='https://www.instagram.com' target='_blank'>
                    <span className='instagram-icon fill-current text-xl'>
                        <i className="fa-brands fa-instagram"></i>
                    </span>
                </a> */}
                    </div>
                </div>
                <div className='location flex items-end'>
                    <div className='location-icon p-[10px] rounded-[40%] border-[1px] border-[#374151] animate-bounce'>
                        <CiLocationOn size='1.3rem' />
                    </div>
                    <p className='address'>
                        60, Otovwodo Road (Otovwodo Market) Ughelli, Delta State.
                    </p>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by<br /> <span className="brand-name font-['Modak'] text-btnColor text-4xl">Kojohwo Global Services</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer