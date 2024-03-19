import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Skipmenu from './Skipmenu'

export default function Root() {
  return (
    <>
        <Skipmenu/>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
    
  )
}
