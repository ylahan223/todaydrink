import React from 'react'
import Style from './css/MobileVisual.module.css'

export default function MobileVisual() {
  return (
    <section className={Style.m_visual}>
    <ul className={Style.m_visual_list}>
      <li><a href="#;"><img src="/images/visual0.jpg" alt="배너" /></a></li>
      <li><a href="#;"><img src="/images/visual1.jpg" alt="배너" /></a></li>
      <li><a href="#;"><img src="/images/visual2.jpg" alt="배너" /></a></li>
      <li><a href="#;"><img src="/images/visual3.jpg" alt="배너" /></a></li>
    </ul>
  </section>
  )
}
