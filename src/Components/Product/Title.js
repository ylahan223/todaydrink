import React from 'react'
import Style from './css/Title.module.css'

export default function Title() {
  return (
    <>

      <section className={Style.menuname}>
        <h2>와인</h2>
        <p>WINE</p>
      </section>
      <nav className={Style.wine}>
        <h2 className='hidden'>와인메뉴</h2>
        <ul className={`${Style.wine_list} is-flex`}>
          <li className={Style.selected}>전체</li>
          <li>레드 와인</li>
          <li>화이트 와인</li>
          <li>스파클링 와인</li>
          <li>로제 와인</li>
          <li>포트 와인</li>
          <li>내추럴 와인</li>
        </ul>
      </nav>

    </>
  )
}
