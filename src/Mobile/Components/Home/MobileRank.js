import React from 'react'
import Style from './css/MobileRank.module.css'

export default function MobileRank() {
    return (
        <section className={Style.m_rank}>
            <h2 className="mobile">이번주 그대들의 PICK</h2>
            <div className={Style.m_rank_img_wrap}>
                <ul className={Style.m_rank_img_list}>
                    <li><a href="#;"><img src="/mobile/images/rank0.png" alt="달빛유자막걸리" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank1.png" alt="청하로제스파클링" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank2.png" alt="순하리레몬진" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank3.png" alt="츄하이리치" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank4.png" alt="서울의밤" /></a></li>
                </ul>
            </div>
            <div className={Style.m_rank_text_wrap}>
                <div className={Style.m_rank_num}>
                    <p><span>1</span>위</p>
                    <button className={`${Style.m_rank_btn} ${Style.prev_btn}`}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className={`${Style.m_rank_btn} ${Style.next_btn}`}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <ul className={Style.m_rank_info_list}>
                    <li>
                        <p className={Style.m_rank_name}><a href="#;">달빛 유자 막걸리</a></p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </li>
                    <li>
                        <p className={Style.m_rank_name}><a href="#;">달빛 유자 막걸리</a></p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </li>
                    <li>
                        <p className={Style.m_rank_name}><a href="#;">달빛 유자 막걸리</a></p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </li>
                    <li>
                        <p className={Style.m_rank_name}><a href="#;">달빛 유자 막걸리</a></p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </li>
                    <li>
                        <p className={Style.m_rank_name}><a href="#;">달빛 유자 막걸리</a></p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
