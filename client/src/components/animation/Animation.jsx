import Lottie from 'lottie-react'
import Success from './Success.json'
import SuccessSound from '../Sounds/Success.mp3'
import { useEffect } from 'react'

export const SuccessAnimation = () =>{
    useEffect(() => {
        const audio = new Audio(SuccessSound)
        audio.play()
    }, [])
    return(
        <div className='fixed flex inset-0 z-50 justify-center items-center bg-black/50 backdrop-blur-sm'>
            <div className='h-35 md:h-40 flex'>
                <Lottie animationData={Success} loop={false} />
                
            </div>
            
        </div>
    )
}