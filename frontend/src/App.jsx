import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify';
import ScrollTop from './components/ScrollTop';
import Profile from './pages/Profile';
import Settings from './pages/Settings';




const App = () => {
  return (
    <div className='min-h-screen bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
      <ScrollTop/>
      <ToastContainer/>
      
      <Navbar/>

      <div className='border-b-4 border-black'></div>

      <SearchBar/>

      <div className='border-b-4 border-black'></div>

      <main className='bg-white border-l-4 border-r-4 border-black px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10'>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/collection' element = {<Collection/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/product/:productId' element = {<Product/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/place-order' element = {<PlaceOrder/>}/>
          <Route path = '/orders' element = {<Orders/>}/>
          <Route path = '/verify' element = {<Verify/>}/>
          <Route path = '/profile' element = {<Profile/>}/>
          <Route path = '/settings' element = {<Settings/>}/>
        </Routes>
      </main>

      <Footer/>
      
    </div>
  )
}

export default App