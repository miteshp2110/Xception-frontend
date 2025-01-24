import { useContext, useEffect } from 'react'
import './style.css'
import { gsap } from 'gsap'
import {AppContext} from '../AppContext'
function Navbar(){

    const {email,isLogged} = useContext(AppContext)
    const t1 = gsap.timeline({delay:1})

    useEffect(()=>{
        gsap.fromTo(".headingContainer, .buttonContainer",{
            y:-10,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:1
        }
    
    )

    t1.to('.x',{rotateY:"360",duration:0.9})
    .to('.c',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.e',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.p',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.t',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.i',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.o',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.n',{rotateY:"360",duration:0.9},'-=0.5')
    .to('.s',{rotateY:"360",duration:0.9},'-=0.5')

    },[])

    


    return(
        <>
            <div className='navbarContainer'>
                <div className='headingContainer'>
                <h1 className='x'>X</h1>
                <h1 className='c'>C</h1>
                <h1 className='e'>E</h1>
                <h1 className='p'>P</h1>
                <h1 className='t'>T</h1>
                <h1 className='i'>I</h1>
                <h1 className='o'>O</h1>
                <h1 className='n'>N</h1>
                <h1 className='s'>S</h1>
                </div>

                <div className='buttonContainer'>
                    <div className='documentation'>
                        <h1>Documentation</h1>
                    </div>

                    {isLogged?
                    
                    <div>
                        
                    </div>
                    :
                    <div className='getStarted' id='gettingStartedButton'>
                        <h1 id='gettingStartedText'>Get Started</h1>
                    </div>
                    
                    }
                </div>

            </div>
        </>
    )
}

export default Navbar