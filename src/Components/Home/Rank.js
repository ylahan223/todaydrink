import React from 'react'
import Style from './css/Rank.module.css'

export default function Rank() {
  return (
    <>
        <section className={`${Style.ranking} sec`}>
        <h2>이번주 그대들의 PICK</h2>

        <div className={Style.ranking_inner}>
            <ul className={`${Style.ranking_list} is-flex`}>
                <li className={Style.center}><a href="#;"><img src="/images/rank0.png" alt="1위"/></a></li>
                <li><a href="#;"><img src="/images/rank1.png" alt="2위"/></a></li>
                <li><a href="#;"><img src="/images/rank2.png" alt="3위"/></a></li>
                <li><a href="#;"><img src="/images/rank3.png" alt="4위"/></a></li>
                <li><a href="#;"><img src="/images/rank4.png" alt="5위"/></a></li>
            </ul>
        </div>
        <div className={Style.ranking_text_wrap}>
            <div className={Style.rank_num}>
              <p><span>1</span>위</p>
              <button className={`${Style.rank_btn} ${Style.rank_prev_btn}`}><i className="fa-solid fa-chevron-left"></i></button>
              <button className={`${Style.rank_btn} ${Style.rank_next_btn}`}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <ul className={Style.rank_info_list}>
              <li>
                <p className={Style.rank_name}><a href="#;">달빛 유자 막걸리</a></p>
                <p className={Style.rank_text}>향긋한 유자향의 유혹 <br/>
                  향긋한 고흥 유자 한 알이 통째로 들어간 프리미엄 유자 막걸리</p>
                  <ul className={Style.rank_kind_list}>
                      <li><span>스타일</span>전통주 &gt; 막걸리</li>
                      <li><span>도수</span>6 %</li>
                      <li><span>용량</span>750ml</li>
                      <li><span>국가/지역</span>충북 진천</li>
                      <li><span>제조사</span>서울장수 주식회사</li>
                  </ul>
              </li>
              <li>
                <p className={Style.rank_name}><a href="#;">로제 청하 스파클링</a></p>
                <p className={Style.rank_text}>장밋빛으로 빛날 내일을 위해 <br/>
                  천연 적사과향이 더해진 청주향과 과일향의 조화</p>
                  <ul className={Style.rank_kind_list}>
                      <li><span>스타일</span>전통주 &gt; 청주</li>
                      <li><span>도수</span>7 %</li>
                      <li><span>용량</span>295ml</li>
                      <li><span>국가/지역</span>한국</li>
                      <li><span>제조사</span>롯데칠성음료</li>
                  </ul>
              </li>
              <li>
                <p className={Style.rank_name}><a href="#;">순하리 레몬진 스트롱</a></p>
                <p className={Style.rank_text}>통레몬 그대로 담은 레몬진</p>
                  <ul className={Style.rank_kind_list}>
                      <li><span>스타일</span>기타 &gt; 과실주</li>
                      <li><span>도수</span>7 %</li>
                      <li><span>용량</span>355ml</li>
                      <li><span>국가/지역</span>한국</li>
                      <li><span>제조사</span>롯데주류</li>
                  </ul>
              </li>
              <li>
                <p className={Style.rank_name}><a href="#;">CU 츄-하이 리치</a></p>
                <p className={Style.rank_text}>소주를 베이스로 한 하이볼에 리치과즙으로
                  맛과 향을 더한 츄하이</p>
                  <ul className={Style.rank_kind_list}>
                      <li><span>스타일</span>기타 &gt; 하이볼</li>
                      <li><span>도수</span>5 %</li>
                      <li><span>용량</span>500ml</li>
                      <li><span>국가/지역</span>한국</li>
                      <li><span>제조사</span>부루구루</li>
                  </ul>
              </li>
              <li>
                <p className={Style.rank_name}><a href="#;">서울의 밤 40%</a></p>
                <p className={Style.rank_text}>깨끗한 밤. 풍부한 밤. 서울의 밤. <br/>
                  노간주나무열매와 매실의 절묘한 향의 밸런스로 탄생한 서울 진(SEOUL GIN)</p>
                  <ul className={Style.rank_kind_list}>
                      <li><span>스타일</span>소주 &gt; 증류주</li>
                      <li><span>도수</span>40 %</li>
                      <li><span>용량</span>375ml</li>
                      <li><span>국가/지역</span>충북 진천</li>
                      <li><span>제조사</span>더한주류</li>
                  </ul>
              </li>
            </ul>
        </div>
    </section>
    </>
  )
}
