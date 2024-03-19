import React from 'react'
import Style from './css/MobileBanner.module.css'

export default function MobileBanner() {
    return (
        <section className={Style.m_banner}>
            <div className={Style.m_top_banner}></div>
            <div className={Style.m_middle_banner}></div>
            <div className={Style.m_bottom_banner}></div>
        </section>
    )
}
