import React, { useContext } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { AppContext } from '../context/appContext'
import Alert from '../components/Alert'

const Root = () => {
  const { addToWishAlert, removeFromWishAlert } = useContext(AppContext)
  return (
    <>
      <Header />
      {
        addToWishAlert && 
        <Alert text='Item successfully added to Wishlist!' styling='alert-success' />
      }
      {
        removeFromWishAlert &&
        <Alert text='Item successfully removed from Wishlist!' styling='alert-warning' />

      }
      {/* <Alert text='Item successfully removed from Wishlist!' styling='alert-warning' /> */}
      <main className='main xl:max-w-[90rem] xl:mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root