import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Home() {
    let[counter, setCounter] = useState(0);

    function increase() {
        setCounter(counter + 1);
    }
    return (
        <>
            <Navbar />
            <h1>Welcome to the Home Page</h1>
            <button type="button" className="btn btn-primary" onClick={increase}>COUNT: {counter}</button>
            <Footer />
        </>
    );
}
