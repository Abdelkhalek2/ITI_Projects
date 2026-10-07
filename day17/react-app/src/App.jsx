import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Parent from './components/Parent/Parent'
import Child from './components/Child/Child'
import About from './components/About/About'
import Contact from './components/Contact/Contact'



function App() {

  return (
    <>
    <div classNamed="container" py-5>
      <h1 className="text-center bg-dark text-white p-3">My first React App</h1>
      <div className="row">
        <div className="col-md-6"><About /></div>
        <div className="col-md-6"><Contact /></div>
      </div>
        <Parent />
      </div>
    </>
  )
}

export default App
