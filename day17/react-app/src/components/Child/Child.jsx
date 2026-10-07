

export default function Child({Products}) {

    return (
        <>
            <div>
            <div className="container" />
            <h1 className="text-center bg-primary text-white p-3">Child Component</h1>
            <div className=" bg-light p-3">
                <h4>Product Name: {Products.product_name}</h4>
                <h4>Product Price: {Products.product_price}</h4>
                <h4>Product Quantity: {Products.product_quantity}</h4>
                <h4>Product Sales: {Products.product_sales}</h4>
            </div>
            </div>

        </>
    )
}