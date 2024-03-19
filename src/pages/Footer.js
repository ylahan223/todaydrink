import React from 'react'
import Style from './css/Footer.module.css'

export default function Footer() {
  return (
    <footer>
    <h2><img src="/images/footer_logo.png" alt="로고"/></h2>
    <div className={Style.footer_inner}>
      <p className={Style.footer_text}>회사명 오늘한잔</p>
      <p className={Style.footer_text}>서울특별시 중구 세종대로 110</p>

    </div>
    <div className={`${Style.footer_right} is-flex`}>
      <a href="#;">개인정보처리방침</a>
      <a href="#;">오시는길</a>
    </div>
    <p className={Style.copyright}>&copy; ONEULHANJAN ALL RIGHTS RESERVED.</p>
  </footer>
  )
}
