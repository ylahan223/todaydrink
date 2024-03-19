import React from 'react'
import Style from './css/Banner.module.css'

export default function Banner() {
  return (
    <section className={`${Style.banner} sec`}>
        <div className={Style.left_banner}><a href="#;"></a></div>
        <div className={Style.right_top_banner}><a href="#;"></a></div>
        <div className={Style.right_bot_banner}><a href="#;"></a></div>
    </section>
  )
}
