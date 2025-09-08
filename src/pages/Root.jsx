import React, { useContext } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { AppContext } from '../context/appContext'
import Alert from '../components/Alert'

const Root = () => {
  const { addToWishAlert, removeFromWishAlert } = useContext(AppContext)
  // console.log('root')
  return (
    <>
      <Header />
      {
        addToWishAlert &&
        <Alert text='Item successfully added to Wishlist!' styling='alert-success' />
      }
      {
        removeFromWishAlert &&
        <Alert text='Item successfully removed from Wishlist!' styling='alert-warning text-sm md:text-md' />

      }
      {/* <Alert text='Item successfully removed from Wishlist!' styling='alert-warning' /> */}
      <div className='flex flex-col min-h-screen'>
        <main className='main flex-grow 2xl:max-w-[128rem] 2xl:mx-auto'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Root