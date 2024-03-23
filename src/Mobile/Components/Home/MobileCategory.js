import React from 'react'
import Style from './css/MobileCategory.module.css'
import { Link } from 'react-router-dom'

export default function MobileCategory() {
    return (
        <section className={Style.m_category}>
            <h2 className="mobile">오늘 그대의 기분은?</h2>
            <div className={Style.m_category_inner}>
                <ul className={`${Style.m_category_list} is-grid`}>
                    <li>
                        <Link to={`/soju/`}>
                        <p className={`${Style.m_category_img} ${Style.gn}`}><img src="/images/soju.png" alt="소주" /></p>
                        <p className={Style.m_category_title}>소주</p>
                        </Link>
                    </li>
                    <li><a href="#;">
                        <p className={`${Style.m_category_img} ${Style.ye}`} ><img src="/images/beer.png" alt="맥주" /></p>
                        <p className={Style.m_category_title}>맥주</p>
                    </a></li>
                    <li>
                    <Link to={`/wine/`}>
                        <p className={`${Style.m_category_img} ${Style.pu}`}><img src="/images/wine.png" alt="와인" /></p>
                        <p className={Style.m_category_title}>와인</p>
                        </Link>
                    </li>
                    <li><a href="#;">
                        <p className={`${Style.m_category_img} ${Style.bl}`}><img src="/images/liquor.png" alt="양주" /></p>
                        <p className={Style.m_category_title}>양주</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.m_category_img} ${Style.pk}`}><img src="/images/cocktail.png" alt="칵테일" /></p>
                        <p className={Style.m_category_title}>칵테일</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.m_category_img} ${Style.ye}`}  ><img src="/images/trnditional.png" alt="전통주" /></p>
                        <p className={Style.m_category_title}>전통주</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.m_category_img} ${Style.gn}`} ><img src="/images/sake.png" alt="사케" /></p>
                        <p className={Style.m_category_title}>사케</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.m_category_img} ${Style.pu}`}><img src="/images/guitar.png" alt="기타" /></p>
                        <p className={Style.m_category_title}>기타</p>
                    </a></li>
                </ul>
            </div>

        </section>
    )
}
