import React from 'react'
import Style from './css/Visual.module.css'

export default function Visual() {
    return (
        <section className={`${Style.visual} sec`}>
            <ul className={Style.visual_list}>
                <li><a href="#;"><img src="/images/visual0.jpg" alt="배너" /></a></li>
                <li><a href="#;"><img src="/images/visual1.jpg" alt="배너" /></a></li>
                <li><a href="#;"><img src="/images/visual2.jpg" alt="배너" /></a></li>
                <li><a href="#;"><img src="/images/visual3.jpg" alt="배너" /></a></li>
            </ul>
            <div className={`${Style.dot}`}>
                <ul className={`${Style.dot_list} is-flex`}>
                    <li className={Style.selected}></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        </section>
    )
}
