import React from 'react'
import Style from './css/Detail.module.css'

export default function Detail() {
    return (
        <>


            <section className={Style.product}>
                <h2 className="hidden">상세페이지</h2>
                <div className={Style.product_info_wrap}>
                    <div className={Style.product_info_img}><img src="/images/detail_wine.png" alt="바론 데 발스 레드" /></div>
                    <p className={`${Style.product_info_en_name} is-flex`}><span>Baron de Valls Tinto(Red)</span><button><i className="fa-regular fa-heart"></i></button></p>
                    <p className={Style.product_info_ko_name}>바론 데 발스 레드</p>
                    <p className={Style.product_info_text}>자두, 바닐라, 체리, 초콜릿의 멋진 풍미를 가지며, 특히 거친 블랙체리의 향과 부드러운 타닌, 그리고 초콜릿 같은 피니시가 인상적입니다. 적당한 바디감과 탄닌을 가지고 있어요.
                    </p>
                    <div className={Style.product_kind}>
                        <ul className={Style.product_kind_list}>
                            <li><span>스타일</span>와인 &gt; 레드 와인</li>
                            <li><span>도수</span>11.5%</li>
                            <li><span>용량</span>750ml</li>
                            <li><span>국가/지역</span>스페인</li>
                            <li><span>제조사</span>비센테 간디아</li>
                            <li><span>주요 품종</span>모나스트렐, 템프라이뇨, 보발</li>
                        </ul>
                    </div>
                </div>
                <div className={Style.product_detail}>
                    <ul className={Style.product_detail_list}>
                        <li><span>색상</span>자주색</li>
                        <li><span>아로마</span>검은 과일류, 오크통, 버터</li>
                        <li className={Style.palette}><span>팔레트</span>
                            <ul className={Style.palette_list}>
                                <li>바디<span className={Style.palette_property}>목넘김</span>
                                    <div className={Style.palette_bar}><span className={`${Style.palette_gauge} lv4`}></span></div>
                                    <div className="is-flex"><p className={Style.palette_property}>가벼움</p><p className={Style.palette_property}>무거움</p></div>
                                </li>
                                <li>타닌<span className={Style.palette_property}>떫기</span>
                                    <div className="palette_bar"><span className={`${Style.palette_gauge} lv2`}></span></div>
                                    <div className="is-flex"><p className={Style.palette_property}>없음</p><p className={Style.palette_property}>강함</p></div>
                                </li>
                                <li>당도<span className={Style.palette_property}></span>
                                    <div className="palette_bar"><span className={`${Style.palette_gauge} lv2`}></span></div>
                                    <div className="is-flex"><p className={Style.palette_property}>없음</p><p className={Style.palette_property}>높음</p></div>
                                </li>
                                <li>산미<span className={Style.palette_property}></span>
                                    <div className="palette_bar"><span className={`${Style.palette_gauge} lv2`}></span></div>
                                    <div className="is-flex"><p className={Style.palette_property}>없음</p><p className={Style.palette_property}>강함</p></div>
                                </li>
                            </ul>
                        </li>
                        <li><span>잘 어울리는 음식</span>소고기, 파스타, 양고기</li>
                    </ul>
                    <div className={Style.product_sum_up}>
                        <p>이 와인은 <span>목 넘김이 무겁고 떫기가 약한 편</span>이에요.</p>
                        <p><span>당도가 낮고 산미가 약해요.</span></p>
                    </div>
                    <button className={Style.back_btn}>목록으로 돌아가기</button>
                </div>
            </section>

        </>
    )
}
