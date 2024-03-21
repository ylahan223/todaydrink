import React, { useEffect, useRef, useState } from 'react'
import Style from './css/MobileHeader.module.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function MobileHeader() {

  const mainMenuList = [ // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
  { index: 0, name: 'Home', pathname: '/', subMenuList: [] },
  {
      index: 1, name: '여행정보', pathname: '/', subMenuList: [
          { index: 0, name: '여행지정보', pathname: '/' },
          { index: 1, name: '여행준비', pathname: '/' },
          { index: 2, name: '유용한사이트', pathname: '/' }]
  },
  {
      index: 2, name: '테마여행', pathname: '/', subMenuList: [
          { index: 0, name: '액티비티', pathname: '/' },
          { index: 1, name: '싱가폴의밤', pathname: '/' },
          { index: 2, name: '미식여행', pathname: '/' },
          { index: 3, name: '도심투어', pathname: '/' }]
  },
  {
      index: 3, name: '이벤트', pathname: '/', subMenuList: [
          { index: 0, name: '이벤트', pathname: '/' }]
  },
  {
      index: 4, name: '고객센터', pathname: '/', subMenuList: [
          { index: 0, name: 'Q&A', pathname: '/' },
          { index: 1, name: '고객의소리', pathname: '/' }]
  }
]

const menuWrap = useRef()
const menuBtn = useRef()
const closeBtn = useRef()
const grayLayer = useRef()
//document.쿼리셀렉터처럼 생각하면 쉬움 = useRef()

const [selectedIndex, setSelectedIndex] = useState()

useEffect(()=>{

  grayLayer.current.style.display='none'
  menuWrap.current.style.right='-60vw'
  menuWrap.current.style.display='none'
  
},[])

const menuOpen=()=>{
  gsap.set('body,html',{overflow:'hidden'})
  grayLayer.current.style.display='block'
  menuWrap.current.style.display='block'
  gsap.to(menuWrap.current, {right:0, duration:0.5, ease:'power1.out'})
}
const menuClose=()=>{
  grayLayer.current.style.display='none'
  gsap.to(menuWrap.current, {right:'-60vw', duration:0.5, ease:'power1.out', onComplete:
  ()=>{
      gsap.set('body,html',{overflow:'visible'})
      menuWrap.current.style.display='none'
}})
}

const menuActivateIndex=(index)=>{
  setSelectedIndex(index)
}






return (
  <header>
      <h2 className={Style.mobilemenu_icon}  ref={menuBtn} onClick={menuOpen}><img src="images/mobilemenu.png" alt="모바일메뉴" /></h2>
      <nav id={Style.mobilemenu} ref={menuWrap} >
          <div id={Style.mobilemenu_inner}>
              <p>환영합니다.<br />로그인 해주세요.
                  <span id={Style.mobileclose_btn} ref={closeBtn} onClick={menuClose} ><img src="images/closebtn.png" alt="닫기" /></span>
              </p>
              <ul id={Style.mobileloginmenu}>
                  <li>로그인</li>
                  <li>회원가입</li>
              </ul>
              <ul id={Style.mobilemenu_list}>
                  {
                      mainMenuList.map((item) => {
                          return (
                              <li className={item.index===selectedIndex && Style.selected} style={item.index===selectedIndex ? {height:55+(55*item.subMenuList.length)}: {height:55}} onClick={()=>{
                                  menuActivateIndex(item.index)
                              }}>
                                  {item.subMenuList.length < 1 ?
                                      <>
                                          {item.name}

                                      </>
                                      :
                                      <>
                                          {item.name}
                                          <span className={Style.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                                          <ul className={Style.mobilesubmenu_list}>
                                              {
                                                  item.subMenuList.map((item) => (
                                                      <li>{item.name}</li>
                                                  ))
                                              }
                                          </ul>
                                      </>
                                  }
                              </li>
                          )
                      })
                  }
                  {/* <li>HOME</li>
                  <li>여행정보
                      <span className={Style.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>여행지정보</li>
                          <li>여행준비</li>
                          <li>유용한사이트</li>
                      </ul>
                  </li>
                  <li>테마여행
                      <span className={Style.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>액티비티</li>
                          <li>싱가폴의밤</li>
                          <li>미식여행</li>
                          <li>도심투어</li>
                      </ul>
                  </li>
                  <li>이벤트
                      <span className={Style.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>이벤트</li>
                      </ul>
                  </li>
                  <li>고객센터
                      <span className={Style.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>Q&A</li>
                          <li>고객의소리</li>
                      </ul>
                  </li> */}
              </ul>
          </div>
      </nav>
      <div id={Style.mobile_grayLayer} ref={grayLayer}></div>
      {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}
  </header>
)
}
