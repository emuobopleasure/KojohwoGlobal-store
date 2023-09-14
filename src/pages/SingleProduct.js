import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Products'
import { BsWhatsapp } from 'react-icons/bs';
import Button from '../components/Button';

const SingleProductPage = () => {
    const {id} = useParams()
    const product = products.find((p) => p.id === parseInt(id))
    return (
        <section>
            <div className="single-item text-gray-700 body-font overflow-hidden bg-base-100 mt-20 mb-4 md:mt-20">
                <div className="container px-5 py-2 md:py-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={product.name} className="product-image lg:w-1/2 w-full h-[17rem] md:h-[28rem] object-scale-down md:object-contain object-center rounded-xl md:rounded" src={product.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            <h1 className="product-name text-gray-600 text-3xl title-font font-medium mb-2">{product.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="number-of-reviews text-gray-600 ml-3">{product.numReviews} Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">


                                </span>
                            </div>
                            <p className="leading-relaxed">{product.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-between lg:justify-start gap-[6vw]">
                                {/* <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                    </div> */}
                                <div className="flex items-center justify-evenly">
                                    <div className="relative">
                                        <span className="mr-3">Quantity</span>
                                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">

                                            {/* <option>M</option>
                          <option>L</option>
                          <option>XL</option> */}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <a className='tooltip tooltip-top' href='https://api.whatsapp.com/message/WRKSVZP2GDD7K1?autoload=1&app_absent=0' target='_blank' data-tip="Chat to Order">
                                    <button className="wish-button rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 bg-green-600">
                                        <BsWhatsapp
                                            color='white'
                                            size='1.5rem'

                                        />
                                    </button>
                                </a>
                            </div>
                            <div className="flex justify-between lg:justify-start gap-[10vw]">
                                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                <Button
                                    text='Add to Cart' styling=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProductPage