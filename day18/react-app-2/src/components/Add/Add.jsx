import React from 'react';

function Add() {
    return (
        <>
            <div className="container mt-4 w-50 bg-light p-4 rounded shadow">
                <h2 className="text-success mb-4">Add Product</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="productName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productDesc" className="form-label">Description</label>
                        <input type="text" className="form-control" id="productDesc" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Price</label>
                        <input type="number" className="form-control" id="productPrice" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productQuantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="productQuantity" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </>
    );
}

export default Add;