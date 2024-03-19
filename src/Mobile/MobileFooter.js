import React from 'react'
import Style from './css/MobileFooter.module.css'

export default function MobileFooter() {
    return (
        <>
            <footer>
                <h2 className={Style.mobile}><img src="/mobile/images/footer_logo.png" alt="로고" /></h2>
                <div className={Style.footer_inner}>
                    <p className={Style.footer_text}>회사명 오늘한잔</p>
                    <p className={Style.footer_text}>서울특별시 중구 세종대로 110</p>

                </div>

                <p className={Style.copyright}>&copy; ONEULHANJAN ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    )
}
