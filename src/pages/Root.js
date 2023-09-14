import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <Header/>
        <main className='main xl:max-w-[90rem]'>
            <Outlet/>
        </main>
    </>
  )
}

export default Root