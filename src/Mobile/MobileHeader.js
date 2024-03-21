import React, { useEffect, useRef, useState } from 'react'
import Style from './css/MobileHeader.module.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function MobileHeader() {

  const mainMenuList = [ // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
    {
      index: 0, name: '주류정보', pathname: '', subMenuList: [
        { index: 0, name: '소주', pathname: '/' },
        { index: 1, name: '맥주', pathname: '/' },
        { index: 2, name: '와인', pathname: '/wine' },
        { index: 3, name: '양주', pathname: '/' },
        { index: 4, name: '칵테일', pathname: '/' },
        { index: 5, name: '전통주', pathname: '/' },
        { index: 6, name: '사케', pathname: '/' },
        { index: 7, name: '기타', pathname: '/' }]
    },
    {
      index: 1, name: '신제품 모아보기', pathname: '', subMenuList: []
    },
    {
      index: 2, name: '그대들의 레시피', pathname: '', subMenuList: [
        { index: 0, name: '안주 조합 추천', pathname: '/' },
        { index: 1, name: '그대만의 레시피', pathname: '/' }]
    },
    {
      index: 3, name: 'TIP', pathname: '', subMenuList: []
    }
  ]
  const mainmenu = useRef()
  const openBtn = useRef()
  const closeBtn = useRef()

  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    mainmenu.current.style.left = '-100vw'
    mainmenu.current.style.display = 'none'
  },[])

  const menuOpen = () => {
    gsap.set('body,html', { overflow: 'hidden' })
    mainmenu.current.style.display = 'block'
    gsap.to(mainmenu.current, { left: 0, duration:0.3 })
  }
  const menuClose = () => {
    gsap.to(mainmenu.current, {
      left: '-100vw', duration:.2,onComplete: () => {
        gsap.set('body,html', { overflow: 'visible' })
        mainmenu.current.style.display = 'none'

      }
    })
  }

  const menuActivateIndex = (index) => {
    setSelectedIndex(index)
  }

  console.log(selectedIndex)


  return (
    <header className={Style.mobile}>
      <h1><Link to='/'><img src="/mobile/images/logo.png" alt="오늘한잔" /></Link></h1>
      <div className={`${Style.header_inner} is-flex`}>
        <button className={Style.hamburger_btn} ref={openBtn} onClick={menuOpen}><i className="fa-solid fa-bars"></i></button>
        <button className={Style.search_btn}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <nav className={Style.mobile} ref={mainmenu}>
        <ul className={Style.mainmenu_list}>
          {
            mainMenuList.map((item) => {
              return (
                <li style={item.index === selectedIndex ? { height: 70 + (50 * item.subMenuList.length) } : { height: 70 }} onClick={() => {
                  menuActivateIndex(item.index !== selectedIndex ? item.index : null)
                }}>
                  {item.subMenuList.length < 1 ?
                    <>
                      {item.name}

                    </>
                    :
                    <>
                      {item.name}
                      <ul className={Style.submenu_list}>
                        {
                          item.subMenuList.map((item) => (
                            <li onClick={()=>{
                              menuClose()
                              menuActivateIndex(null)
                            }}><Link to={item.pathname}>{item.name}</Link></li>
                          ))
                        }
                      </ul>
                    </>
                  }
                </li>
              )
            })
          }








          {/* <li>주류정보
            <ul className={Style.submenu_list}>
              <li>소주</li>
              <li>맥주</li>
              <li><Link to='/wine'>와인</Link></li>
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
        <button className={Style.close_btn} ref={closeBtn} onClick={() => {
          menuClose()
          menuActivateIndex(null)
        }}><i className="fa-solid fa-xmark"></i></button>
      </nav>
    </header>
  )
}
