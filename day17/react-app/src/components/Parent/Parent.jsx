import React, { useState } from 'react'
import Child from '../Child/Child'
export default function Parent() {
    let [products, setProducts] = useState({
        product_name: "iphone 15 pro max",
        product_price: 1000,
        product_quantity: 10,
        product_sales: "15%"
});

    return (
        <>
            <div className="container">
                <h1 className="text-center bg-d text-white p-3">Parent Component</h1>
                <Child Products={products} />
            </div>
        </>
    )
}