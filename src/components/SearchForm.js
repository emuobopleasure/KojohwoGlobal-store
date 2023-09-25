import React, { useContext } from 'react'
import { AppContext } from '../appContext'

const SearchForm = ({formStyle, groupStyle, inputStyle, btnStyle}) => {
  const {searchQuery, setSearchQuery} = useContext(AppContext)

  return (
    <form className={`form my-5 flex justify-center ${formStyle}`}>
      <div className="form-control w-full">
        <div className={`input-group ${groupStyle}`}>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" placeholder="Search products…" className={`input input-bordered w-full ${inputStyle}`} />
          <button className={`btn btn-square text-white bg-[#c95fa1] border-[#c95fa1] hover:bg-[#92075a] ${btnStyle}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm