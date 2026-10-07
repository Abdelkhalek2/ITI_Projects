import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products/Products'
import All from './components/All/All'
import Add from './components/Add/Add'
import NotFound from './components/NotFound/NotFound'
import Layout from './components/Layout/Layout'

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products />, children: [
        { path: "all", element: <All /> },
        { path: "add", element: <Add /> },
      {path: "*", element: <NotFound />}
      ]},
    ]},
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
