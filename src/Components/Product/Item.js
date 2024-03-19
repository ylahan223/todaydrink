import React from 'react'
import Style from './css/Item.module.css'
import { Link } from 'react-router-dom'

export default function Item({item}) {
    return (
        <li>
            <Link to={`/product/${item.id}`}>
                <p className={Style.product_img}><img src={item.image} alt="와인" /></p>
                <p className={Style.product_en_name}>{item.enName}</p>
                <p className={Style.product_ko_name}>{item.koName}</p>
            </Link>
        </li>
    )
}
