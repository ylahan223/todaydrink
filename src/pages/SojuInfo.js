import React, { useEffect, useState } from 'react'
import Style from '../Components/ProductDetail/css/SojuInfo.module.css'
import { Link, useParams } from 'react-router-dom'
import useProduct from '../Hooks/sojuUseProduct'
import { getProductDetail } from '../api/firebase'

export default function ProductDetail() {



  const { sojuId } = useParams()

  const [allProducts] = useProduct()

  // const [selectedItem, setSelectedItem] = useState({})

  //console.log("all", allProducts)

  const selectedItem = getSelectedItem(allProducts, sojuId)




  function getSelectedItem(product, id){
    return(
      product.find((item)=>(item.id===id))
    )
  }
  window.scrollTo(0,0)





  return (
    <>
      <section className={Style.menuname}>
        <h2>소주</h2>
        <p>SOJU</p>
      </section>

      <section className={`${Style.product} sec`}>
        <h2 className="hidden">상세페이지</h2>
        <div className={Style.product_info_wrap}>
          <div className={Style.product_info_img}><img src={selectedItem?.image} alt={selectedItem?.koName} /></div>
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
            </ul>
          </div>
        </div>
          <div className={Style.product_sum_up}>
            {selectedItem?.sum}
          </div>
          <Link to={"/soju"}><button className={Style.back_btn}>목록으로 돌아가기</button></Link>
      </section>
    </>
  )
}
