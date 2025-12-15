import { useState } from "react";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { COLLECTION_ID, DATABASE_ID, databases } from "../appwrite";
import { ID } from "appwrite";


const NewsletterSection = () => {

    // await.databases.createDocument(
    //     import.meta.env.VITE_APPWRITE_DATABASE_ID,
    //     import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    //     "unique()",
    //     (email)
    // )

    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')

    const handleSubscribe = async (e) => {
        e.preventDefault()

        if (!email) {
            setStatus('Please enter a valid email')
        }

        try {
            // Create a new row (document) in Appwrite
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(), // Auto-generate unique ID
                { email }
            );

            setStatus("🎉 Successfully subscribed!");
            setEmail("");
        } catch (error) {
            console.error("Appwrite error:", error);
            setStatus("Something went wrong. Please try again.");
        }


    }

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
                                    <h2 className="text-3xl text-neutral font-bold mb-6">
                                        📬Stay Updated
                                        <br />
                                        <span className="text-btnColor"></span>
                                    </h2>
                                    <p className="text-accent font-normal mb-12 lg:pl-2">
                                        Subscribe to our newsletter and be the first to know about new arrivals, special offers, and exclusive deals.
                                    </p>
                                    <form className="md:flex flex-row" onSubmit={handleSubscribe}>
                                        <div className="relative w-full mb-2 md:mb-0 md:mr-2">
                                            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 text-xl">
                                                <PiEnvelopeSimpleLight />
                                            </span>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control block w-full pl-11 pr-4 py-2 text-xl font-normal text-gray-700 bg-base-100 bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out focus:text-gray-700 focus:bg-base-100 focus:border-neutral focus:outline-none"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-block btn btn-neutral text-white rounded-full shadow-lg"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Subscribe
                                        </button>
                                    </form>

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
