import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1)

    return (
        <div>
            <div className="join rounded-full">
                {
                    pageNumbers.map((number) => (

                        <button key={number} onClick={() => onPageChange(number)} className={ number === currentPage ? "join-item btn bg-accent text-white hover:bg-base-300 hover:text-black" : 'join-item btn' }>{number}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Pagination