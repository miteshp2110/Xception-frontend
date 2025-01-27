import { useEffect } from 'react'
import './style.css'
import gsap from 'gsap'
function ComponentLoader(){
    useEffect(()=>{
        gsap.to('.componentLoader',{
            rotate:360,
            duration:1,
            repeat:-1
        })
    },[])
    return (
        <div className='componentLoaderContainer'>
            <div className='componentLoader'>
                <div className='insideComponentLoader'>

                </div>
            </div>
        </div>
    )
}

export default ComponentLoader