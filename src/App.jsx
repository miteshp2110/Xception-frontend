import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

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
      <Navbar/>
      <Home/>
      <Footer/>
      
    </>
  )
}

export default App
