import React, { useEffect, useRef } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Header() {
  const mainMenuList = [ // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
    {
      index: 0, name: '주류정보', pathname: '/', subMenuList: [
        { index: 0, name: '소주', pathname: '/soju' },
        { index: 1, name: '맥주', pathname: '/' },
        { index: 2, name: '와인', pathname: '/wine' },
        { index: 3, name: '양주', pathname: '/' },
        { index: 4, name: '칵테일', pathname: '/' },
        { index: 5, name: '전통주', pathname: '/' },
        { index: 6, name: '사케', pathname: '/' },
        { index: 7, name: '기타', pathname: '/' }]
    },
    {
      index: 1, name: '새소식', pathname: '/', subMenuList: []
    },
    {
      index: 2, name: '그대들의 레시피', pathname: '/', subMenuList: [
        { index: 0, name: '안주 조합 추천', pathname: '/' },
        { index: 1, name: '그대만의 레시피', pathname: '/' }]
    },
    {
      index: 3, name: 'TIP', pathname: '/', subMenuList: []
    }
  ]

  const headerWrap = useRef()
  const subMenu = useRef([])

  // useEffect(()=>{
  //   for(const item of subMenu.current){
  //     item.style.opcity=0
  //     item.style.display='none'
  //   }
  // })

  const openSubMenu = () => {
    gsap.killTweensOf(headerWrap.current)
    gsap.to(headerWrap.current, {
      height: 340, duration: 0.3, onComplete: () => {
        gsap.set(subMenu.current, { display: 'block', opacity: 1 })
      }
    })
  }
  const closeSubMenu = () => {
    gsap.killTweensOf(subMenu.current)
    gsap.set(subMenu.current, { display: 'none', opacity: 0 })
    gsap.killTweensOf(headerWrap.current)
    gsap.to(headerWrap.current, { height: 80 })
  }

  return (
    <div className={Style.header_wrap} ref={headerWrap} onMouseLeave={closeSubMenu}>
      <header className={`${Style.header} is-flex`} >
        <h1 className={`${Style.logo} is-flex`}><Link to='/'><img src="/images/logo.png" alt="오늘한잔" /></Link></h1>
        <nav className={`${Style.mainmenu} is-flex`}>
          <ul className={`${Style.mainmenu_list} is-flex`} onMouseEnter={openSubMenu}>
            {
              mainMenuList.map((item) => {
                return (
                  <li>
                    {item.subMenuList.length < 1 ?
                      <>
                        {item.name}

                      </>
                      :
                      <>
                        {item.name}
                        <ul className={Style.submenu_list} ref={(el)=>(subMenu.current[item.index]=el)}>
                          {
                            item.subMenuList.map((item) => (
                              <li><Link to={item.pathname}>{item.name}</Link></li>
                            ))
                          }
                        </ul>
                      </>
                    }
                  </li>
                )
              })
            }
            {/* <li><Link to = '/wine'>주류정보</Link>
            <ul className={Style.submenu_list} ref={subMenu}>
              <li>소주</li>
              <li>맥주</li>
              <li>와인</li>
              <li>양주</li>
              <li>칵테일</li>
              <li>전통주</li>
              <li>사케</li>
              <li>기타</li>
            </ul>
          </li>
          <li><a href="#;">신제품 모아보기</a></li>
          <li><a href="#;">그대들의 레시피</a>
          <ul className={Style.submenu_list}>
              <li>안주 조합 추천</li>
              <li>그대만의 레시피</li>
            </ul>
          </li>
          <li><a href="#;">TIP</a></li> */}
          </ul>
        </nav>
        <div className={`${Style.search} is-flex`}>
          <a href="#;"><i className="fa-solid fa-magnifying-glass"></i></a>
        </div>
      </header>
    </div>

  )
}