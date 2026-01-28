import React, { useState, useEffect } from 'react';
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import useNewsletter from '../hooks/useNewsLetter.js';
import NewsletterModal from './NewsLetterModal.jsx';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [name, setName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { subscribe, isLoading, message, isSuccess, clearMessage } = useNewsletter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {

            setEmailError('Please enter your email address');


            return;
        }

        setEmailError('');

        const result = await subscribe(email, name);

        if (result) {
            // Show modal after subscription attempt
            setShowModal(true);

            if (result.success) {
                setEmail('');
                setName('');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        clearMessage();
    };

    useEffect(() => {
        return () => clearMessage();
    }, [clearMessage]);

    return (
        <>
            <section className='newsletter mx-5 md:mx-10'>
                <div className="container my-12 mx-auto rounded-xl shadow-md border-t">
                    {/* Section: Design Block */}
                    <section className="mb-14 text-gray-800 text-center lg:text-left">
                        <div className="block">
                            <div className="flex flex-wrap items-center">
                                <div className="image-wrapper lg:pl-4 lg:py-4 grow-0 shrink-0 w-full basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                    <img src="https://images.unsplash.com/photo-1581349437898-cebbe9831942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Email@" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                    <div className="px-6 py-12 md:px-12">
                                        <h2 className="text-3xl text-neutral-dark font-bold mb-6">
                                            📬Stay Updated
                                            <br />
                                            <span className="text-btnColor"></span>
                                        </h2>
                                        <p className="text-neutral-dark font-normal mb-12 lg:pl-2">
                                            Subscribe to our newsletter and be the first to know about new arrivals, special offers, and exclusive deals.
                                        </p>
                                        <div className='form-wrapper md:flex items-end gap-[12px]'>
                                            <div className="md:flex flex-col basis-[83%]">
                                                {/* Name Input Field */}
                                                <div className="md:flex flex-row mb-3">
                                                    <div className="relative w-full">
                                                        <input
                                                            type="text"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out focus:text-gray-700 focus:bg-base-100 focus:border-accent focus:outline-none"
                                                            placeholder="Your name (optional)"
                                                            disabled={isLoading}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    {/* Email Input and Subscribe Button */}
                                                    <div className='emailError ml-3 mb-1'>
                                                        {emailError && (
                                                            <p className="mt-2 text-sm text-red-500 text-left">
                                                                {emailError}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="relative w-full mb-3 md:mb-0 md:mr-2">
                                                        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 text-xl">
                                                            <PiEnvelopeSimpleLight />
                                                        </span>
                                                        <input
                                                            type="email"
                                                            value={email}
                                                            onChange={(e) => {
                                                                setEmail(e.target.value)
                                                                if (emailError) setEmailError('')
                                                            }}

                                                            className={`form-control block w-full pl-11 pr-4 py-2 text-xl font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out focus:text-gray-700 focus:bg-base-100 focus:border-accent focus:outline-none ${emailError ? "border-red-500" : ""}`}
                                                            placeholder="Enter your email"
                                                            required
                                                            disabled={isLoading}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleSubmit}
                                                className="inline-block btn btn-neutral border-neutral rounded-full shadow-lg basis-[15%] mt-1 lg:mt-0 min-w-[10rem] lg:ml-1"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <span className="loading loading-dots loading-lg text-[#836056]"></span>
                                                ) : (
                                                    'Subscribe'
                                                )}
                                            </button>
                                        </div>

                                        <p className="text-sm mt-3 text-start text-neutral-dark italic ml-3">
                                            By subscribing, you agree to receive emails from Kojohwo Global.
                                        </p>
                                        {/* <button
                                            onClick={handleSubmit}
                                            className="inline-block btn btn-neutral border-neutral rounded-full shadow-lg basis-[15%] mt-1 lg:mt-0 min-w-[10rem] lg:ml-1"
                                            disabled

                                        >
                                            <span className="loading loading-dots loading-lg text-[#836056]"></span>

                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section: Design Block */}
                </div>
            </section>

            {/* Newsletter Modal */}
            <NewsletterModal
                isOpen={showModal}
                isSuccess={isSuccess}
                message={message}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default NewsletterSection;