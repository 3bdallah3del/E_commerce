import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import About from './pages/About Us/About'
import Contact from './pages/Contact/Contact'
import Cart from './components/Cart/Cart'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />


          

      

      </Routes>
      
      
    </Router>
    
  )
}

export default App
