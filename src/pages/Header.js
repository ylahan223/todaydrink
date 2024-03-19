import React from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={`${Style.header} is-flex`}>
      <h1 className={`${Style.logo} is-flex`}><Link to ='/'><img src="/images/logo.png" alt="오늘한잔" /></Link></h1>
      <nav className={`${Style.mainmenu} is-flex`}>
        <ul className={`${Style.mainmenu_list} is-flex`}>
          <li><Link to = '/wine'>주류정보</Link></li>
          <li><a href="#;">신제품 모아보기</a></li>
          <li><a href="#;">그대들의 레시피</a></li>
          <li><a href="#;">TIP</a></li>
        </ul>
      </nav>
      <div className={`${Style.search} is-flex`}>
        <a href="#;"><i className="fa-solid fa-magnifying-glass"></i></a>
      </div>
    </header>

  )
}