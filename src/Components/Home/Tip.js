import React from 'react'
import Style from './css/Tip.module.css'

export default function Tip() {
    return (
        <section className={`${Style.tip} sec`}>
            <h2>그대들을 위한 TIP</h2>
            <p className={Style.tip_img}><img src="/images/tip.jpg" alt="팁" /></p>
            <p className={Style.tip_title}><a href="#;">누구나 알기 쉬운 와인 매너 10가지</a></p>
            <p className={Style.tip_text}>
                각각의 술은 고유 문화를 동반한다. 그리고 이에 따른 음주매너와 마시는 방법 또한 다르다. 특정 문화권의 커뮤니티에 동참하기 위해서는 그들의 술문화, 음식문화에도 관심을 갖고 자연스럽게 몸에 익도록 습득할 필요도 있어 보인다. 특히나 최근엔 와인문화가 국내에도 많이 보편화되어 있어 각종 모임이나 식사에서 와인을 마시며 자연스럽게 분위기를 즐기는 것이 기본이 되었다.
                단기속성이긴 하지만 와인문화, 와인매너에 대해 열심히 공부한 내용 중, 알아두면 아주 유용한 몇 가지 포인트를 간략히 정리해본다. 와인자체의 종류, 맛 등에 관한 내용들은 인터넷과 지천에 널려있기에 따로 언급하지 않고, 오히려 애매하지만 간과하기 쉬운, 하지만 아주 중요하게 지켜야 할 매너들과 기본상식에 관해 쪽집게 과외식으로 열거해 보겠다. 이것들만 몸에 익혀도 와알못(와인을 알지못함의 요즘식 줄임말) 소리는 면할 수 있다.</p>
        </section>
    )
}
