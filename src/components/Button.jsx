import React from 'react'

const Button = ({onClick, styling, text}) => {
  return (
    <button onClick={onClick} className={`inline-block px-7 py-3 bg-neutral text-white font-medium text-sm leading-snug capitalize rounded-full shadow-md hover:bg-[#ae2c00] hover:shadow-lg focus:bg-[#ae2c00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ae2c00] active:shadow-lg transition duration-150 ease-in-out ${styling}`}>
    {text}
    </button>
  )
}

export default Button