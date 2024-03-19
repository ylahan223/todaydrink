import React from 'react'
import Style from './css/Recipe.module.css'

export default function Recipe() {
    return (
        <div className={Style.recipe_wrap}>
            <section className={`${Style.recipe} sec`}>
                <h2>그대들의 추천 레시피</h2>
                <div className={Style.recipe_inner}>
                    <ul className={`${Style.recipe_list} is-flex`}>
                        <li><a href="#;">
                            <p className={Style.recipe_img}><img src="/images/recipe0.jpg" alt="랭킹"/></p>
                            <p className={Style.recipe_title}>장성규 계란주</p>
                            <p className={Style.recipe_nicname}>오늘도마신다</p>
                            <div className={`${Style.recipe_mark} is-flex`}>
                                <div className={Style.recipe_mark_inner}>
                                    <button className={Style.heart_btn}><i className="fa-regular fa-heart"></i></button><span>456</span>
                                </div>
                                <div className={Style.recipe_mark_inner}>
                                    <button className={Style.bookmark_btn}><i className="fa-regular fa-bookmark"></i></button><span>97</span>
                                </div>
                            </div>
                        </a></li>
                        <li><a href="#;">
                            <p className={Style.recipe_img}><img src="/images/recipe1.jpg" alt="랭킹"/></p>
                            <p className={Style.recipe_title}>강민경 꿀주</p>
                            <p className={Style.recipe_nicname}>가나다</p>
                            <div className={`${Style.recipe_mark} is-flex`}>
                                <div className={Style.recipe_mark_inner}>
                                    <button className={Style.heart_btn}><i className="fa-regular fa-heart"></i></button><span>456</span>
                                </div>
                                <div className={Style.recipe_mark_inner}>
                                    <button className={Style.bookmark_btn}><i className="fa-regular fa-bookmark"></i></button><span>97</span>
                                </div>
                            </div>
                        </a></li>
                        <li><a href="#;">
                            <p className={Style.recipe_img}><img src="/images/recipe2.jpg" alt="랭킹"/></p>
                            <p className={Style.recipe_title}>금테주</p>
                            <p className={Style.recipe_nicname}>마나나</p>
                            <div className={`${Style.recipe_mark} is-flex`}>
                                <div className={Style.recipe_mark_inner}>
                                    <button className={Style.heart_btn}><i className="fa-regular fa-heart"></i></button><span>456</span>
                                </div>
                                <div className={Style.recipe_mark_inner}>
                                    <button className={Style.bookmark_btn}><i className="fa-regular fa-bookmark"></i></button><span>97</span>
                                </div>
                            </div>
                        </a></li>

                    </ul>

                </div>
            </section>
        </div>
    )
}
