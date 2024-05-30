import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
// import ProductDetails from './components/pages/ProductDetails'
import Products from './components/pages/Products'
import UpdateProduct from './components/pages/UpdateProduct'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Navbar from './components/Navbar'
import Authentication from './components/Authentication'
import ProtectedProducts from './components/pages/ProtectedProducts'
import Images from './components/pages/Images'

// let Images = lazy(() => import("./components/pages/Images"))
let ProductDetails = lazy(() => import('./components/pages/ProductDetails'))






function App() {
  return (
    <Authentication>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/products' element={<ProtectedProducts>
            <Products />
          </ProtectedProducts>} />


          <Route path='/productdetails/:pid' element={<Suspense fallback="Details Loading.....">
            <ProductDetails />
          </Suspense>} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
          {/* <Route path='/images' element={<Suspense fallback="Loading.....">
            <Images />
          </Suspense>} /> */}

          <Route path='/images' element={<Images />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='*' element={<h1 style={{ color: "red" }}>ooops Page Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </Authentication>
  )
}

export default App
