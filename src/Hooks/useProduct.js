// import axios from 'axios'
import { useState, useEffect } from 'react'
import { getProducts } from '../api/firebase'

export default function useProduct() {

    const [allProducts, setAllProducts] = useState([])
  
    useEffect(()=>{
      getProducts().then((res)=>{
            setAllProducts(res)
        })
    }, [])

  return (
    [allProducts]
  )
}
