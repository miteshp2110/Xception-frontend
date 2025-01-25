import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Documentation from './components/Documentation/Documentation'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  const [isLoading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  },[isLoading])
  return (
    <>
      {/* {isLoading?<Loader/>:
      <>
        <Navbar/>
        <Home/>
        <Footer/>
      </>
      } */}
      
      {/* <Home/> */}
      {/* <Documentation/> */}

      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/documentation' element={<Documentation/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
