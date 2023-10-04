import React from 'react'

const Alert = ({styling, text}) => {
    return (
        <div className='flex justify-center'>
            <div className={`alert z-50 fixed mt-[4rem] flex justify-center w-[90vw] md:w-[60vw] px-[17px] ${styling}`}>
                <div className='flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{`${text}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Alert