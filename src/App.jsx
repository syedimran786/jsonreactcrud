import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import ProductDetails from './components/pages/ProductDetails'
import Products from './components/pages/Products'
import UpdateProduct from './components/pages/UpdateProduct'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Navbar from './components/Navbar'
import Authentication from './components/Authentication'






function App() {
  return (
    <Authentication>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/products' element={<Products />} />


          <Route path='/productdetails/:pid' element={<ProductDetails />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='*' element={<h1 style={{ color: "red" }}>ooops Page Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </Authentication>
  )
}

export default App
