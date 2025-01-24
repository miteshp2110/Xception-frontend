import { gsap } from "gsap"
import "./style.css"
import { useEffect } from "react"

function Loader(){

    useEffect(()=>{
        gsap.to('.circleLoading',{scale:1,duration:1,delay:0.5})

        gsap.to(".circleRotation",{
            scale:1,
            duration:1,
            delay:1.2
        })
        gsap.to(".circleRotator",{
            rotation:360,
            repeat:1,
            duration:1.2,
            delay:2.2
        })
        gsap.to('.circleRotation',{
            scale:0,
            duration:0.2,
            delay:4.4
        })
        gsap.to('.circleLoading',{
            borderRadius:"0%",
            // width:"100vw",
            // height:"100vh",
            scale:20,
            duration:1,
            delay:4.7
        })

        
    },[])
    
    return (
        <>
            <div className="loaderBackground">
                <div className="circleLoading">
                    <div className="circleRotator">
                    <div className="circleRotation"></div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Loader