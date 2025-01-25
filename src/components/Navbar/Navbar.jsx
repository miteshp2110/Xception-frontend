import { useContext, useEffect } from 'react'
import './style.css'
import { gsap } from 'gsap'
import {AppContext} from '../AppContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navbar(){
    const navigate = useNavigate();
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


    const handleGetStartedClick = () => {
        navigate("/");
        setTimeout(() => {
            const target = document.getElementById("start")
            if(target){
                target.scrollIntoView({behavior:"instant",block:"start"})
            }

        //   document.querySelector('[name="getStartedContainer"]').scrollIntoView({ behavior: "smooth" });
        }, 0);
      };
    


    return(
        <>
            <div className='navbarContainer'>
                <Link to="/">
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
                </Link>

                <div className='buttonContainer'>
                    <Link to="/documentation"><div className='documentation'>
                        <h1>Documentation</h1>
                    </div></Link>

                    {isLogged?
                    
                    <div>
                        
                    </div>
                    :
            
                     <div className='getStarted' id='gettingStartedButton' onClick={handleGetStartedClick}>
                       <h1 id='gettingStartedText'>Get Started</h1>
                    </div>
                    
                    
                    }
                </div>

            </div>
        </>
    )
}

export default Navbar