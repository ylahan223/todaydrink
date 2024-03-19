import React from 'react'
import Style from './css/MobileRecipe.module.css'

export default function MobileRecipe() {
    return (
        <section className={Style.m_recipe}>
            <h2 className="mobile">그대들의 추천 레시피</h2>
            <div className={Style.m_recipe_inner}>
                <ul className={`${Style.m_recipe_list} is-flex`}>
                    <li><a href="#;">
                        <p className={Style.m_recipe_img}><img src="/mobile/images/recipe0.jpg" alt="레시피"/></p>
                        <p className={Style.m_recipe_title}>장성규 계란주</p>
                        <p className={Style.m_recipe_nicname}>오늘도마신다</p>
                        <div className={`${Style.m_recipe_mark} is-flex`}>
                            <div className={Style.m_recipe_mark_inner}>
                                <button className={Style.heart_btn}><i className="fa-regular fa-heart"></i></button><span>456</span>
                            </div>
                            <div className={Style.m_recipe_mark_inner}>
                                <button className={Style.bookmark_btn}><i className="fa-regular fa-bookmark"></i></button><span>97</span>
                            </div>
                        </div>
                    </a></li>
                    <li><a href="#;">
                        <p className={Style.m_recipe_img}><img src="/mobile/images/recipe1.jpg" alt="레시피"/></p>
                        <p className={Style.m_recipe_title}>강민경 꿀주</p>
                        <p className={Style.m_recipe_nicname}>오늘도마신다</p>
                        <div className={`${Style.m_recipe_mark} is-flex`}>
                            <div className={Style.m_recipe_mark_inner}>
                                <button className={Style.heart_btn}><i className="fa-regular fa-heart"></i></button><span>456</span>
                            </div>
                            <div className={Style.m_recipe_mark_inner}>
                                <button className={Style.bookmark_btn}><i className="fa-regular fa-bookmark"></i></button><span>97</span>
                            </div>
                        </div>
                    </a></li>
                </ul>
            </div>
        </section>
    )
}
