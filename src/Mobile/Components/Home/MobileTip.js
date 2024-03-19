import React from 'react'
import Style from './css/MobileTip.module.css'

export default function MobileTip() {
    return (

        <section className={Style.m_tip}>
            <h2 className="mobile">그대들을 위한 TIP</h2>
            <p className={Style.m_tip_img}><img src="/mobile/images/tip.jpg" alt="팁"/></p>
            <p className={Style.m_tip_title}><a href="#;">누구나 알기 쉬운 와인 매너 10가지</a></p>
            <p className={Style.m_tip_text}>각각의 술은 고유 문화를 동반한다. 그리고 이에 따른 음주매너와 마시는 방법 또한 다르다. 특정 문화권의 커뮤니티에 동참하기 위해서는 그들의 술문화, 음식문화에도 관심을 갖고 자연스럽게 몸에 익도록 습득할 필요도 있어 보인다.</p>
        </section>
    )
}
