import React, { useEffect, useState } from 'react'
import Style from '../Components/Product/css/SojuList.module.css'
import useProduct from '../Hooks/sojuUseProduct'
import Soju from '../Components/Product/Soju'


export default function Product() {

  const initCategory=[
    "전체", "증류식", "희석식"
  ]

  const [selectedCategory, setSelectedCategory]=useState('전체')


  const changeCategory=(category)=>{
    setSelectedCategory(category)
  }

  const [allProducts] = useProduct()


  const filteredItems=getFilteredItems(allProducts, selectedCategory)


  function getFilteredItems(products, category){
    if(category==="전체"){
      return (
        products
      )
    }else{
     return (
      products.filter((item)=>(item.category===category))
     )
    }
  }
 

  return (
    <>

    <section className={`${Style.banner} sec`}>
      <h2>소주</h2>
      <p>SOJU</p>
    </section>
    <nav className={Style.category}>
      <h2 className='hidden'>소주메뉴</h2>
      <ul className={`${Style.category_list} is-flex`}>

        {/* <li className={Style.selected}>전체</li>
        <li>레드 와인</li>
        <li>화이트 와인</li>
        <li>스파클링 와인</li>
        <li>로제 와인</li>
        <li>포트 와인</li>
        <li>내추럴 와인</li> */}

      {
         initCategory.map((item)=>{
          return (
            <li className={item===selectedCategory && Style.selected} onClick={()=>{
              changeCategory(item)
            }}>{item}</li>
          )
         })
      }

      </ul>
    </nav>

    <section className={`${Style.product} sec`}>
      <h2 className='hidden'>상품목록</h2>
      <ul className={`${Style.product_list} is-grid`}>


      {
       filteredItems.map((item)=>{
          return (
            <Soju item={item}/>
            // <li>
            //   <Link to={`/product/${item.id}`}>
            //     <p className={Style.product_img}><img src={item.image} alt="와인" /></p>
            //     <p className={Style.product_en_name}>{item.enName}</p>
            //     <p className={Style.product_ko_name}>{item.koName}</p>
            //   </Link>
            // </li>
          )
        })
      }


        {/* <li>
          <p className={Style.product_img}><img src="/images/product/wine0.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Baron de Valls Tinto(Red)</p>
          <p className={Style.product_ko_name}>바론 데 발스 레드</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine1.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Cuna Del Sol Merlot 2021</p>
          <p className={Style.product_ko_name}>쿠나 델 솔 메를로 2021</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine2.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Bottega Moscato Petalo</p>
          <p className={Style.product_ko_name}>보테가 모스카토 페탈로</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine3.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Bottega Pinot grigio rose</p>
          <p className={Style.product_ko_name}>보테가 피노 그리지오 로제 2021</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine4.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Con un Par Monastrell</p>
          <p className={Style.product_ko_name}>콘운파 모나스트렐</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine5.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Cuna Del Sol Sauvignon Blanc 2021</p>
          <p className={Style.product_ko_name}>쿠나 델 솔 소비뇽 블랑 2021</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine6.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Tread Softly Grenache</p>
          <p className={Style.product_ko_name}>트레드 소프틀리 그르나쉬</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine7.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Baron de Valls Blanco(White)</p>
          <p className={Style.product_ko_name}>바론 데 발스 화이트</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine8.png" alt="와인" /></p>
          <p className={Style.product_en_name}>CABRIZ ROSE</p>
          <p className={Style.product_ko_name}>카브리즈 로제 와인</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine9.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Bottega Ancestrale Naturale</p>
          <p className={Style.product_ko_name}>보테가 안체스트랄레 내추럴</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine10.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Tread Softly Sauvignon Blanc</p>
          <p className={Style.product_ko_name}>트레드 소프틀리 소비뇽 블랑</p>
        </li>
        <li>
          <p className={Style.product_img}><img src="/images/product/wine11.png" alt="와인" /></p>
          <p className={Style.product_en_name}>Con un Par Sauvignon Blanc</p>
          <p className={Style.product_ko_name}>콘운파 소비뇽 블랑</p>
        </li> */}

      </ul>

      <div className={`${Style.page_num}`}>
        <ul className={`${Style.page_num_list} is-flex`}>
          <li className={Style.selected}>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
        <div className={`${Style.page_btn} is-flex`}>
          <button className={Style.prev_btn}><i className="fa-solid fa-chevron-left"></i></button>
          <button className={Style.next_btn}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

    </section>
  </>
  )
}
