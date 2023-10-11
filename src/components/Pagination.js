import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1)

    return (
        <div>
            <div className="join">
                {
                    pageNumbers.map((number) => (

                        <button key={number} onClick={() => onPageChange(number)} className={ number === currentPage ? "join-item btn btn-active bg-[#c9c4c4]" : 'join-item btn' }>{number}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Pagination