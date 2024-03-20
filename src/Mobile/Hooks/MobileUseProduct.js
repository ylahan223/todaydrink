import { useState, useEffect } from 'react'
import axios from 'axios'
// import { getProducts } from '../api/firebase'

export default function useProduct() {
  const [allProducts, setAllProducts] = useState([])

      useEffect(()=>{
      axios.get('/data/products_.json').then((res)=>{
        setAllProducts(res.data)
      })
    },[])


  return (
    [allProducts]
  )


  
  //   useEffect(()=>{
  //     getProducts().then((res)=>{
  //           setAllProducts(res)
  //       })
  //   }, [])

  // return (
  //   [allProducts]
  // )
}



// import axios from 'axios'
// import { useState, useEffect } from 'react'
// // import { getProducts } from '../api/firebase'

// export default function useProduct() {

//   const [allProducts, setAllProducts] = useState([])

//   useEffect(()=>{
//     axios.get('/public/data/products_.json').then((res)=>{
//       setAllProducts(res.data)
//     })
//   },[])



// return(
//   [allProducts]
//   )
// }

// getProducts().then((res)=>{
// 	setAllProducts(res)

// })
  // 주의 res.data 아님(getProducts() 함수 반환값은 바로 배열로 저장됨)
  //   const [allProducts, setAllProducts] = useState([])

  //   // useEffect(()=>{
  //   //     getProducts().then((res)=>{
  //   //           setAllProducts(res)
  //   //       })
  //   //   }, [])
  

  //   useEffect(()=>{
  //     axios.get('/data/products1.json').then(()=>{
  //       setAllProducts(res.data)
  //     })
  //   },[])


  // return (
  //   [allProducts]
  // )

