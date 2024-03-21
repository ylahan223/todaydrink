import React from 'react'
import Style from './css/MobileVisual.module.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MobileVisual() {
  return (
    <section className={Style.m_visual}>
            <Swiper autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}modules={[Autoplay]} className={Style.mySwiper}>
                <SwiperSlide><img src="/images/visual0.jpg" alt="배너" /></SwiperSlide>
                <SwiperSlide><img src="/images/visual1.jpg" alt="배너" /></SwiperSlide>
                <SwiperSlide><img src="/images/visual2.jpg" alt="배너" /></SwiperSlide>
                <SwiperSlide><img src="/images/visual3.jpg" alt="배너" /></SwiperSlide>

            </Swiper>
  </section>
  )
}
