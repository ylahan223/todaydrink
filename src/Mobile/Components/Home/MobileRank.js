import React from 'react'
import Style from './css/MobileRank.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './css/MobileRankSwiper.css'
// import required modules
import { Navigation } from 'swiper/modules';

export default function MobileRank() {
    return (
        <section className={Style.m_rank}>
            <h2 className="mobile">이번주 그대들의 PICK</h2>
            <div className={Style.m_rank_inner}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    id='m_rank_swiper'
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={Style.m_rank_img}><img src="/mobile/images/rank0.png" alt="달빛유자막걸리" /></div>
                        <p className={Style.m_rank_num}><span>1</span>위</p>
                        <p className={Style.m_rank_name}>달빛 유자 막걸리</p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.m_rank_img}><img src="/mobile/images/rank1.png" alt="청하로제스파클링" /></div>
                        <p className={Style.m_rank_num}><span>2</span>위</p>
                        <p className={Style.m_rank_name}>로제 청하 스파클링</p>
                        <p className={Style.m_rank_text}>장밋빛으로 빛날 내일을 위해 <br/>
                  천연 적사과향이 더해진 청주향과 과일향의 조화</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.m_rank_img}><img src="/mobile/images/rank2.png" alt="순하리레몬진" /></div>
                        <p className={Style.m_rank_num}><span>3</span>위</p>
                        <p className={Style.m_rank_name}>순하리 레몬진 스트롱</p>
                        <p className={Style.m_rank_text}>통레몬 그대로 담은 레몬진</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.m_rank_img}><img src="/mobile/images/rank3.png" alt="츄하이리치" /></div>
                        <p className={Style.m_rank_num}><span>4</span>위</p>
                        <p className={Style.m_rank_name}>CU 츄-하이 리치</p>
                        <p className={Style.m_rank_text}>
                        소주를 베이스로 한 하이볼에 리치과즙으로
                  맛과 향을 더한 츄하이</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.m_rank_img}><img src="/mobile/images/rank4.png" alt="서울의밤" /></div>
                        <p className={Style.m_rank_num}><span>5</span>위</p>
                        <p className={Style.m_rank_name}>서울의 밤 40%</p>
                        <p className={Style.m_rank_text}>깨끗한 밤. 풍부한 밤. 서울의 밤. <br/>
                  노간주나무열매와 매실의 절묘한 향의 밸런스로 탄생한 서울 진(SEOUL GIN)</p>
                    </SwiperSlide>
                </Swiper>

            </div>
                {/* <ul className={Style.m_rank_list}>
                    <li>
                        <div className={Style.m_rank_img}><img src="/mobile/images/rank0.png" alt="달빛유자막걸리" /></div>
                        <p className={Style.m_rank_num}><span>1</span>위</p>
                        <p className={Style.m_rank_name}>달빛 유자 막걸리</p>
                        <p className={Style.m_rank_text}>향긋한 유자향의 유혹 <br />
                            향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                    </li>

                </ul> */}
            {/* <div className={Style.m_rank_img_wrap}>
                <ul className={Style.m_rank_img_list}>
                    <li><a href="#;"><img src="/mobile/images/rank0.png" alt="달빛유자막걸리" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank1.png" alt="청하로제스파클링" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank2.png" alt="순하리레몬진" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank3.png" alt="츄하이리치" /></a></li>
                    <li><a href="#;"><img src="/mobile/images/rank4.png" alt="서울의밤" /></a></li>
                </ul>
            </div> */}







            {/* <div className={Style.m_rank_text_wrap}>
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
            </div> */}
        </section>
    )
}
