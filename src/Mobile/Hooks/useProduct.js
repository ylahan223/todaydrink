

export default function useProduct() {
    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
      axios.get('/data/products copy.json').then(()=>{
        setAllProducts(res.data)
      })
    },[])


  return (
    [allProducts]
  )
}
