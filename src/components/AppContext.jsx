import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [isLogged,setLogged] = useState(()=>{
        return localStorage.getItem("isLogged") || false
    })

    const [jwt,setJwt] = useState(()=>{
        return localStorage.getItem("jwt") || ''
    })

    const [email,setEmail] = useState(()=>{
        return localStorage.getItem("email") || ''
    })

    function login(jwt,email){
        setJwt(jwt)
        setLogged(true)
        setEmail(email)
    }
    function logout(){
        localStorage.removeItem('isLogged')
        localStorage.removeItem('jwt')
        localStorage.removeItem('email')
        setLogged(false)
        setEmail('')
        setJwt('')
    }

    return(
        <AppContext.Provider value={{jwt,email,login,logout,isLogged}}>
            {children}
        </AppContext.Provider>
    )
}