import React from 'react'
import Button from './Button'

const ShopItem = ({item}) => {
    return (
        <article>
            <div className="flex justify-center items-center w-full cursor-pointer">
                <div className="card bg-base-100 shadow-lg hover:shadow-2xl h-[17rem] rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row w-[12rem] sm:h-52 sm:w-auto md:w-[23rem] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover" src={item.image} alt={item.name} />
                    <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 sm:h-full sm:items-baseline sm:w-1/2">
                        <h1 className="text-lg font-bold mb-0 text-gray-600 font-sans">
                            {item.name}
                        </h1>
                        <p className="text-xs text-gray-500 w-4/5">
                            {item.description}
                        </p>
                        <div className="rating flex items-center">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <p className='no-of-reviews ml-1 text-xs text-gray-500'>({item.numReviews} Reviews)</p>
                        </div>
                        <div className="w-full flex justify-between items-center pb-3">
                            <h1 className="font-bold text-gray-500">#{item.price}</h1>
                            <Button
                                text="Details" styling="mr-5 rounded-3xl text-sm px-[8px] py-[1px] font-light mr-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ShopItem