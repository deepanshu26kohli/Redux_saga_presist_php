import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Products = () => {
    const result = useSelector((state)=> state.productData)  
    console.log("State in products comp",result.products)
  return (
    <div>
     <h5>Main Component</h5>
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
