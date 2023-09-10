import React from 'react'

const Button = ({onClick, styling, text}) => {
  return (
    <button onClick={onClick} className={`inline-block px-7 py-3 bg-btnColor text-white font-medium text-sm leading-snug capitalize rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out ${styling}`}>
    {text}
    </button>
  )
}

export default Button