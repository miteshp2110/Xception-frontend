import { useContext, useEffect, useRef } from 'react'
import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppContext } from '../AppContext'
import { Element } from 'react-scroll';
function Home(){
    const elements = useRef([]);
    const {isLogged} = useContext(AppContext)
    gsap.registerPlugin(ScrollTrigger); 

    useEffect(()=>{

        if(!isLogged){
            

        const allElements = elements.current; 
        gsap.from(".hone",{
            x:-10,
            duration:1,
            alpha:0,
            delay:0.5
        })
        gsap.from(".hpara",{
            x:15,
            duration:1,
            alpha:0,
            delay:0.5
        })

        gsap.from(".scrollHint",{
            x:-10,
            duration:1,
            alpha:0,
            delay:0.5
        })

        allElements.forEach(element =>{

            gsap.fromTo(element,
                {alpha:0,x:-10},
                {alpha:1,x:0,
                    scrollTrigger:{
                        trigger: element,
                        start:"bottom center",
                        end : "bottom center",
                        toggleActions: "play none none none" 
                    }
                }
            )
        })

        gsap.fromTo('.getStart',
            {alpha:0,x:-10},
            {alpha:1,x:0,
                scrollTrigger:{
                    trigger: '.continueButton',
                    start:"start center",
                    end : "start center",
                    toggleActions: "play none none none" ,
                }
            }
        )

        gsap.fromTo(".scroller",
            {alpha:0,x:-10},
            {alpha:1,x:0,
                scrollTrigger:{
                    trigger:".scroller",
                    start:"start start+=90",
                    end:"end center",
                }

            }
        )
        gsap.fromTo(".scrollerBox",
            {x:0},
            {x:"-540em",
                scrollTrigger:{
                    trigger:".scroller",
                    start:"start start+=80",
                    end:"start start-=1000",
                    pin:true,
                    scrub:2,
                    
                }

            }
        )

        gsap.to('.scrollHint',{
            y:10,
            duration:0.5,
            repeat:-1,
            yoyo:true,
            
        })

        window.addEventListener("scroll",(e)=>{
            gsap.to(".scrollHint",{
                alpha:0
            })
        })
        }
        
    

    },[])

   
    

    return(
        <>
            <div className='homeBackground'>
                
                {!isLogged?
                    <>
                    <div className='notLoggedContainer' id='notLoggedContainer'>
                        <div className='heroContainer'>
                        <h2 className='hone'>Simplify Exception Management with Ease</h2>
                        <p className='hpara'>
                        Struggling with handling exceptions in your Express application? Our platform provides AI-driven solutions to debug and resolve your issues in real-time. 
                        </p>
                        </div>
                    </div>

                    <div className='scrollHint'>Scroll</div>
                    

                        <div className='scroller'>

                            <div className='noScrollHead'>
                            <h1> Why Choose Us?</h1>
                            </div>                            

                    
                            <div className='scrollerBox'>
                                
                                <div className='scrollElement'>AI-generated solutions tailored for Express applications.</div>
                                <div className='scrollElement'>Email notifications with detailed debugging steps.</div>
                                <div className='scrollElement'>
                                Intuitive project-based API key management.
                                </div>
                                <div className='scrollElement'>
                                Comprehensive exception history tracking.
                                </div>
                                <div className='scrollElement'>Easy sign-in with Google or GitHub.</div>
                            </div>
                    </div>
                    <div className='notLoggedContainer'>

                        <div ref={(el) => (elements.current[0] = el)}
                        className='heroContainer' id='fst'>
                        <h2>AI-Powered Insights with Llama3</h2>
                        <p>
                        Leverage the power of Llama3 to analyze your exceptions and receive detailed, actionable solutions delivered straight to your inbox. Never let an error slow you down again.
                        </p>
                        </div>

                        <div 
                        ref={(el) => (elements.current[1] = el)}className='heroContainer'>
                        <h2>Stay Organized with Exception History</h2>
                        <p>
                        Keep track of all your past exceptions with a comprehensive dashboard. Access solutions and insights for recurring issues anytime, anywhere.
                        </p>
                        </div>

                        <div 
                        ref={(el) => (elements.current[2] = el)}className='heroContainer'>
                        <h2> Seamless Integration with API Keys</h2>
                        <p >
                        Generate an API key, integrate it into our NPM package, and unlock automated exception management for your projects effortlessly.
                        </p>
                        </div>

                        <Element name='getStartedContainer'>
                            <div
                            
                            className='heroContainer getStart'>
                            <h2> Get Started in Minutes</h2>
                            <p id='start' >
                            Sign in with Google or GitHub to create your first project. Start managing your exceptions, generate API keys, and let us take care of the rest.
                            </p>
                                <div className='continueButton'>
                                    <a href='https://xceptions.tech/service/oauth/google' className='continueGoogle'>
                                    <span style={{ color: ' #4285F4' }}>G</span>
                                        <span style={{ color: '#DB4437' }}>o</span>
                                        <span style={{ color: '#F4B400' }}>o</span>
                                        <span style={{ color: '#4285F4' }}>g</span>
                                        <span style={{ color: ' #0F9D58' }}>l</span>
                                        <span style={{ color: '#DB4437' }}>e</span>
                                    </a>
                                    <a href='https://xceptions.tech/service/oauth/github' className='continueGithub'>
                                        Github
                                    </a>
                                </div>
                            </div>
                        </Element>

                        <div 
                        ref={(el) => (elements.current[3] = el)}className='heroContainer'>
                        <h2>Start Managing Exceptions Today</h2>
                        <p>
                        Simplify your development process and focus on building great applications. Sign up now to experience hassle-free exception management!
                        </p>
                        </div>

                    </div>

                    
                </>

                :
                    <div>

                    </div>
                
                }
                
            </div>
        </>
    )
}

export default Home