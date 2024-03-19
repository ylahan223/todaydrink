import React from 'react'
import Style from './css/MobileHeader.module.css'
import { Link } from 'react-router-dom'

export default function MobileHeader() {
  return (
    <header className={Style.mobile}>
    <h1><Link to = '/'><img src="/mobile/images/logo.png" alt="오늘한잔"/></Link></h1>
    <div className={`${Style.header_inner} is-flex`}>
      <button className={Style.hamburger_btn}><i className="fa-solid fa-bars"></i></button>
      <button className={Style.search_btn}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  )
}
