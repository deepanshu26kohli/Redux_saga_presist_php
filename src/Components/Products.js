import React from 'react'
// import { useSelector , useDispatch } from 'react-redux/es/hooks/useSelector'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/Actions/ProductAction';
const Products = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{

    dispatch(getProduct())
    console.log("Product comp useEffect called")
  
},[])
    const result = useSelector((state)=> state.productData)  
    // console.log("State in products comp",result.products)
  return (
    <div>
     <h5>Product Component</h5>
      {
        result.products && result.products.map((product)=>{
            return <div key={product.id}>
                <p>Brand : {product.brand}</p>
                <p>Category : {product.category}</p>
                <p>Description : {product.description}</p>
                <hr/>
            </div>
        })
      }
    </div>
  )
}

export default Products
