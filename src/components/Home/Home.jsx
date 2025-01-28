import { useContext, useEffect, useRef, useState } from 'react'
import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppContext } from '../AppContext'
import { Element } from 'react-scroll';
import { addProject, getAllExceptions, getAllProject } from '../../utils/CoreRequests';
import CodeBlock from '../CodeBlock/CodeBlock'
import ComponentLoader from '../ComponentLoader/ComponentLoader';

function Home(){
    
    const [projectName,setProjectName] = useState('')
    const [projectArray,setProjectArray] = useState([])
    const [exceptionsArray,setExceptionsArray] = useState([])
    const [activeProject,setActiveProject] = useState('')
    const [activeException,setActiveException] = useState(null)
    const [loadingExceptions,setLoadingException] = useState(false)
    const [loadingProject,setLoadingProject] = useState(true)
    // setActiveException(0)
    // setActiveProject('name')

    const [isScroll,setScroll] = useState(false)
    const elements = useRef([]);
    const {isLogged,logout,jwt} = useContext(AppContext)
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

        if(!isScroll){
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
                setScroll(true)
            })
            }
        }

        else{

            gsap.from(".loggedContainer",{
                alpha:0,
                x:-20,
                duration:1
            })
            const init = async()=>{
                setLoadingProject(true)
                const response = await getAllProject(jwt)
                if (response.error){
                    if(response.status === 403){
                        console.log("logout")
                    }
                }
                else{
                    setProjectArray(response.data.data)
                }
            }
            init()
            setLoadingProject(false)
            
        }
        
    

    },[])

    async function addNewProject() {
        const response = await addProject("Test Project2",jwt)
        if (response.error){
            if(response.status === 403){
                console.log("logout")
            }
            else{
                if(response.status === 401){
                    console.log("name already taken")
                }
            }
        }
        else{
            console.log("created project")
            //refresh
        }
    }

    useEffect(()=>{
        if(isLogged && activeException){
            console.log(activeException)
        }
    },[activeException])
    
    useEffect(()=>{
        if(isLogged && activeProject){
            setLoadingException(true)
            
            // const exceptionObj = {
                
            //     exception:{
            //         stack:"this is stack trace for the code",
            //         name:"some name",
            //         cause:"some cause"
            //     },
            //     llmResponse : "the probable cause of the problem is an unhandled exception or error in the server.js file at line 14, column 19, a possible way to solve this issue is to check the code at the specified line and column, ensure that all variables and functions are properly defined and called, and add error handling mechanisms such as try-catch blocks to catch and log any errors that may occur, also verify that all dependencies and modules are properly imported and configured, and check the express router configuration to ensure that it is correctly set up to handle requests and errors."
            // }

            // const exceptionObj2 = {
                
            //     exception:{
            //         stack:"this is stack trace for the code 2",
            //         name:"exception2",
            //         cause:"other cause"
            //     },
            //     llmResponse : "the probable cause of the problem is an unhandled exception or error in the server.js file at line 14, column 19, a possible way to solve this issue is to check the code at the specified line and column, ensure that all variables and functions are properly defined and called, and add error handling mechanisms such as try-catch blocks to catch and log any errors that may occur, also verify that all dependencies and modules are properly imported and configured, and check the express router configuration to ensure that it is correctly set up to handle requests and errors."
            // }

            // const myArr = [exceptionObj,exceptionObj2]

            const init = async()=>{
                const response = await getAllExceptions(activeProject,jwt)
                if (response.error){
                    if(response.status === 403){
                        console.log("logout")
                    }
                }
                else{
                    setExceptionsArray(response.data.data[0])
                }
                setLoadingException(false)
            }
            init()
        }
    },[activeProject])
    


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
                    <div className='loggedContainer'>

                        {/* <button onClick={async()=>{await addNewProject()}}>Add project</button> */}

                        <div className='projectSection sections'>
                            <h1 className='addProject'>Add Project</h1>

                            <div className='projectList'>
                                {loadingProject?<ComponentLoader/>:
                                projectArray.map((project)=>(
                                    <div className={`projectCard ${activeProject=== project.apiKey?'active':''}`} key={project.name} onClick={()=>{
                                        
                                        setActiveProject(project.apiKey)
                                    }}>
                                        <h3>
                                            {project.name}
                                        </h3>
                                        <CodeBlock code={project.apiKey} language='english'/>
                                    </div>
                                ))
                                }

                                
                            </div>
                        </div>

                        <div className='exceptionsSection sections'>
                            <h1>Exceptions</h1>

                            {activeProject?<div className='projectList' id='exceptionSections'>
                    
                                {loadingExceptions?<ComponentLoader/>:                                exceptionsArray.map((exception,index)=>(
                                    <div className={`exceptionCard ${activeException==exception?'active':''}`} key={index} onClick={()=>{
                                        
                                        setActiveException(exception)
                                    }}>
                                        <h3>
                                            {exception.exception.name}
                                        </h3>
                                    </div>
                                ))}

                                
                            </div>:<p>Select a Project</p>}


                        </div>

                        <div className='briefSection sections'>
                            <h1>Exception-Detail</h1>

                            {activeException?<div className='detailContainer'>
                                {console.log(activeException)}
                                <h2>Name : {activeException.exception.name}</h2>
                                <h2>cause : {activeException.exception.cause}</h2>
                                <h2>Stack Trace :</h2>
                                <div className='stackTrace'>{activeException.exception.stack}</div>

    <h2>Probable solution : </h2><br/><div className='solutionText'>{activeException.llmResponse}</div>
                            </div>:<p>Select a exception</p>}
                        </div>

                    </div>
                
                }
                
            </div>
        </>
    )
}

export default Home