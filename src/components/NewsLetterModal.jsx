import React, { useEffect } from 'react';
import { GoCheck } from 'react-icons/go';
import { VscClose } from 'react-icons/vsc';
import { TfiClose } from 'react-icons/tfi';

const NewsletterModal = ({ isOpen, isSuccess, message, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;

            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            return () => {
                // Restore everything when modal closes
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);


    if (!isOpen) return null;



    return (


        <>
            {/* Modal Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 animate-fadeIn"
                onClick={onClose}
            >
                {/* Modal Content */}
                <div
                    className="bg-base-100 rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-accent transition-colors duration-200 p-[5px] rounded-[40%] border-[1px] border-accent hover:text-base-100 hover:bg-accent"
                        aria-label="Close modal"
                    >
                        <VscClose size="1.5rem" />
                    </button>

                    {/* Icon */}
                    <div className="flex justify-center mb-6 ">
                        {isSuccess ? (
                            <GoCheck className="text-success text-7xl animate-scaleIn p-[6px] bg-base-100 animate-scaleIn shadow-2xl drop-shadow-xl rounded-full" />
                        ) : (
                            <TfiClose className="text-error p-[6px] bg-base-100 text-7xl animate-scaleIn shadow-2xl drop-shadow-xl rounded-full" />
                        )}
                    </div>

                    {/* Title */}
                    {
                        isSuccess ?
                            (<h2 className="text-2xl font-bold text-center mb-4 text-success">
                                Success!
                            </h2>
                            )
                            :
                            (<h2 className="text-2xl font-bold text-center mb-4 text-error">
                                ⚠️ Oops!
                            </h2>
                            )
                    }
                    {/* <h2 className="text-2xl font-bold text-center mb-4">
                        {isSuccess ? '🎉 Success!' : '⚠️ Oops!'}
                    </h2> */}

                    {/* Message */}
                    <p className="text-center text-gray-600 mb-8 text-base">
                        {message || (isSuccess
                            ? 'Thank you for subscribing to our newsletter! Stay tuned for exclusive deals and updates.'
                            : 'Something went wrong. Please try again later.'
                        )}
                    </p>

                    {/* Action Button */}
                    <button
                        onClick={onClose}
                        className={`w-full btn ${isSuccess ? 'btn-success' : 'btn-error'} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                        {isSuccess ? 'Continue Shopping' : 'Try Again'}
                    </button>

                    {/* Additional Info for Success */}
                    {/* {isSuccess && (
                        <p className="text-xs text-center text-gray-500 mt-4 italic">
                            Check your inbox for a confirmation email
                        </p>
                    )} */}
                </div>
            </div>

            {/* Add animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
        </>
    );
};

export default NewsletterModal;