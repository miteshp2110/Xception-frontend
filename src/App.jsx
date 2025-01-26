import { useContext, useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Documentation from './components/Documentation/Documentation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './components/AppContext'

function App() {
  const {isLogged,login} = useContext(AppContext)
  const [isLoading,setLoading] = useState(true)
  useEffect(()=>{

    const queryParams = new URLSearchParams(window.location.search);
            const jwtParam = queryParams.get("jwt");


            if(jwtParam){
                try {
                    const jwtObject = JSON.parse(decodeURIComponent(jwtParam)); 
                    login(jwtObject.token,jwtObject.email)
        
                    window.location.href="/"
                } 
                catch (err) {
                    console.error("Failed to parse JWT parameter", err);
                }
            }


    setTimeout(() => {
      setLoading(false)
    }, 6000);
  },[isLoading])
  return (
    <>
      {isLoading && !isLogged?<Loader/>:
      <>
          <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/documentation' element={<Documentation/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
      }
      

      
      
    </>
  )
}

export default App
