import React from 'react'
import Style from './css/Category.module.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './css/Swiper.css'

export default function Category() {
    return (
        <>
            <section className={`${Style.category} sec`}>
                <h2>오늘 그대의 기분은?</h2>
                <div className={Style.category_inner}>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}
                        className="mySwiper"
                        id='category_swiper'
                        navigation={true}
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <div className={Style.category_box}>
                                <p className={`${Style.category_img} ${Style.gn}`} ><img src="/images/soju.png" alt="소주" /></p>
                                <p className={Style.category_title}>소주</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={Style.category_box}>
                        <p className={`${Style.category_img} ${Style.ye}`} ><img src="/images/beer.png" alt="맥주" /></p>
                        <p className={Style.category_title}>맥주</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><Link to='/wine'>
                        <div className={Style.category_box}>
                        <p className={`${Style.category_img} ${Style.pu}`}><img src="/images/wine.png" alt="와인" /></p>
                        <p className={Style.category_title}>와인</p>
                            </div></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={Style.category_box}>
                        <p className={`${Style.category_img} ${Style.bl}`}><img src="/images/liquor.png" alt="양주" /></p>
                        <p className={Style.category_title}>양주</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={Style.category_box}>
                        <p className={`${Style.category_img} ${Style.pk}`} ><img src="/images/cocktail.png" alt="칵테일" /></p>
                        <p className={Style.category_title}>칵테일</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={Style.category_box}>
                        <p className={`${Style.category_img} ${Style.ye}`} ><img src="/images/trnditional.png" alt="전통주" /></p>
                        <p className={Style.category_title}>전통주</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={Style.category_box}>
                        <p className={`${Style.category_img} ${Style.gn}`} ><img src="/images/sake.png" alt="사케" /></p>
                        <p className={Style.category_title}>사케</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <p className={`${Style.category_img} ${Style.pu}`}><img src="/images/guitar.png" alt="기타" /></p>
                        <p className={Style.category_title}>기타</p>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </section >
            {/* <section className={`${Style.category} sec`}>
            <h2>오늘 그대의 기분은?</h2>
            <div className={Style.category_inner}>
                <ul className={`${Style.category_list} is-flex`}>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.gn}`} ><img src="/images/soju.png" alt="소주" /></p>
                        <p className={Style.category_title}>소주</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.ye}`} ><img src="/images/beer.png" alt="맥주" /></p>
                        <p className={Style.category_title}>맥주</p>
                    </a></li>
                    <li><Link to='/wine'>
                        <p className={`${Style.category_img} ${Style.pu}`}><img src="/images/wine.png" alt="와인" /></p>
                        <p className={Style.category_title}>와인</p>
                    </Link></li>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.bl}`}><img src="/images/liquor.png" alt="양주" /></p>
                        <p className={Style.category_title}>양주</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.pk}`} ><img src="/images/cocktail.png" alt="칵테일" /></p>
                        <p className={Style.category_title}>칵테일</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.ye}`} ><img src="/images/trnditional.png" alt="전통주" /></p>
                        <p className={Style.category_title}>전통주</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.gn}`} ><img src="/images/sake.png" alt="사케" /></p>
                        <p className={Style.category_title}>사케</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.category_img} ${Style.pu}`}><img src="/images/guitar.png" alt="기타" /></p>
                        <p className={Style.category_title}>기타</p>
                    </a></li>
                </ul>
                <div className={`${Style.category_btn_wrap} is-flex`}>
                    <button className={Style.category_prev_btn}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className={Style.category_next_btn}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>

        </section> */}
        </>


    )
}
