import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/login';
import {Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast";
import { useAppContext } from './context/AppContextProvider';
import AllProducts from './pages/AllProducts';
import Footer from './Components/Footer';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/productdetails';




const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin}=useAppContext()
  return (
    <div>
     {isSellerPath?null: <Navbar/>}

     {showUserLogin ? <Login/>:null}
     <Toaster/>
      <div className={`${isSellerPath? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<AllProducts />}/>
          <Route path='/products/:category' element={<ProductCategory />}/>

          <Route path='/products/:category/:id' element={<ProductDetails/>}/>

        </Routes>
        </div>
       {!isSellerPath && <Footer/>}
           </div>
  )
}

export default App
