import React from 'react'
import Style from './css/Wine.module.css'
import { Link } from 'react-router-dom'

export default function Soju({item}) {
    return (
        <li>
            <Link to={`/soju/${item.id}`}>
                <p className={Style.product_img}><img src={item.image} alt="소주" /></p>
                <p className={Style.product_en_name}>{item.enName}</p>
                <p className={Style.product_ko_name}>{item.koName}</p>
            </Link>
        </li>
    )
}
