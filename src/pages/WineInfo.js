import React, { useEffect, useState } from 'react'
import Style from '../Components/ProductDetail/css/WineInfo.module.css'
import { Link, useParams } from 'react-router-dom'
// import useProduct from '../Hooks/useProduct'
import { getProductDetail } from '../api/firebase'

export default function ProductDetail() {



  const { wineId } = useParams()

  // const [allProducts] = useProduct()

  // const selectedItem = allProducts.find((item) => (item.id === wineId))

  const [selectedItem, setSelectedItem] = useState({})

  useEffect(()=>{
    getProductDetail(wineId).then((res)=>{
            setSelectedItem(res)
        })
  }, [wineId])





  return (
    <>
      <section className={Style.menuname}>
        <h2>와인</h2>
        <p>WINE</p>
      </section>


      <section className={Style.product}>
        <h2 className="hidden">상세페이지</h2>
        <div className={Style.product_info_wrap}>
          <div className={Style.product_info_img}><img src={selectedItem?.image} alt="바론 데 발스 레드" /></div>
          <p className={`${Style.product_info_en_name} is-flex`}><span>{selectedItem?.enName}</span><button><i className="fa-regular fa-heart"></i></button></p>
          <p className={Style.product_info_ko_name}>{selectedItem?.koName}</p>
          <p className={Style.product_info_text}>{selectedItem?.text}</p>
          <div className={Style.product_kind}>
            <ul className={Style.product_kind_list}>
              <li><span>스타일</span>와인 &gt; {selectedItem?.category}</li>
              <li><span>도수</span>{selectedItem?.abv}%</li>
              <li><span>용량</span>{selectedItem?.capacity}ml</li>
              <li><span>국가/지역</span>{selectedItem?.state}</li>
              <li><span>제조사</span>{selectedItem?.make}</li>
              <li><span>주요 품종</span>{selectedItem?.variety}</li>
            </ul>
          </div>
        </div>
        <div className={Style.product_detail}>
          <ul className={Style.product_detail_list}>
            <li><span>색상</span>{selectedItem?.color}</li>
            <li><span>아로마</span>{selectedItem?.aroma}</li>
            <li className={Style.palette}><span>팔레트</span>
              <ul className={Style.palette_list}>
                <li>바디<span className={Style.palette_property}>목넘김</span>
                  <div className={Style.palette_bar}><span className={`${Style.palette_gauge} ${Style.lv4}`}></span></div>
                  <div className="is-flex"><p className={Style.palette_property}>가벼움</p><p className={Style.palette_property}>무거움</p></div>
                </li>
                <li>타닌<span className={Style.palette_property}>떫기</span>
                  <div className={Style.palette_bar}><span className={`${Style.palette_gauge} ${Style.lv2}`}></span></div>
                  <div className="is-flex"><p className={Style.palette_property}>없음</p><p className={Style.palette_property}>강함</p></div>
                </li>
                <li>당도<span className={Style.palette_property}></span>
                  <div className={Style.palette_bar}><span className={`${Style.palette_gauge} ${Style.lv2}`}></span></div>
                  <div className="is-flex"><p className={Style.palette_property}>없음</p><p className={Style.palette_property}>높음</p></div>
                </li>
                <li>산미<span className={Style.palette_property}></span>
                  <div className={Style.palette_bar}><span className={`${Style.palette_gauge} ${Style.lv2}`}></span></div>
                  <div className="is-flex"><p className={Style.palette_property}>없음</p><p className={Style.palette_property}>강함</p></div>
                </li>
              </ul>
            </li>
            <li><span>잘 어울리는 음식</span>{selectedItem?.food}</li>
          </ul>
          <div className={Style.product_sum_up}>
            <p>이 와인은 <span>{selectedItem?.sum1}</span>이에요.</p>
            <p><span>{selectedItem?.sum2}</span></p>
          </div>
          <Link to={"/wine"}><button className={Style.back_btn}>목록으로 돌아가기</button></Link>
        </div>
      </section>
    </>
  )
}
