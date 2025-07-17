import React from 'react';

const NewsletterSection = () => {
    return (
        <section className='newsletter mx-5 md:mx-10'>
            <div className="container my-12 mx-auto rounded-xl shadow-md border-t">
                {/* Section: Design Block */}
                <section className="mb-14 text-gray-800 text-center lg:text-left">
                    <div className="block">
                        <div className="flex flex-wrap items-center">
                            <div className="image-wrapper lg:pl-4 lg:py-4 grow-0 shrink-0 w-full basis-auto  lg:flex lg:w-6/12 xl:w-4/12">
                                <img src="https://images.unsplash.com/photo-1581349437898-cebbe9831942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Email@" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="text-3xl text-btnColor font-bold mb-6">
                                    📬Stay Updated
                                        <br />
                                        <span className="text-btnColor"></span>
                                    </h2>
                                    <p className="text-gray-500 mb-12 lg:pl-2">
                                        Subscribe to our newsletter and be the first to know about new arrivals, special offers, and exclusive deals.
                                    </p>
                                    <div className="md:flex flex-row">
                                        <input type="text" className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnColor focus:outline-none" placeholder="Enter your email" />
                                        <button type="submit" className="inline-block px-7 py-3 bg-btnColor text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
        </section>
    );
};

export default NewsletterSection;
