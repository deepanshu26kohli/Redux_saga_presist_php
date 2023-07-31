import React, { useEffect, useState } from 'react'
import localStorage from 'redux-persist/es/storage'

const DummyComponent = () => {
    const [value, setValue] = useState(null)
    // console.log("dummy", localStorage.getItem("persist:root"))

    useEffect(() => {
        localStorage.getItem("persist:root").then((data) => {
            let x = JSON.parse(data)
            x = JSON.parse(x.productData)
            setValue(x)
            
            // console.log("tyjytu",x.products)
        })
    },[])
    

    return (
        <div>
            <h5>Dummy Component</h5>
            {/* {
                value && value.products.map((product) => {

                    return <div key={product.id}>
                        <p>Brand : {product.brand}</p>
                        <p>Category : {product.category}</p>
                        <p>Description : {product.description}</p>
                        <hr />
                    </div>
                })
            } */}
        </div>
    )
}

export default DummyComponent
