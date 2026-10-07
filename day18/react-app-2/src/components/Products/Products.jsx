import React from 'react';
import { useState, useEffect } from 'react';
import {Outlet,Link} from 'react-router-dom';

function Products() {
    let [Count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted or updated");

        return () => {
            console.log("Component will unmount");
        };
    }, []);

    useEffect(() => {
        if(Count === 0) {
            return;
        }
        console.log(`products Component Did Update`);
    }, [Count]);

    function updateCount() {
        setCount(Count + 1);
    }
    return (
        <>
            <div className="container mt-4">
                <div className="text-center mb-4 bg-black text-white p-4 rounded">
                    <h1>Products</h1>
                    <p>Welcome to the Products page!</p>
                </div>
                <h2 className="text-center">Products</h2>
                <div className="mb-4 align-items-center d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={updateCount}>
                        Update Count : {Count}
                    </button>
                </div>
                <div className="mt-5">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Products;