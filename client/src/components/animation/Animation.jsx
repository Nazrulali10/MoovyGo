import Lottie from 'lottie-react'
import Success from './Success.json'

export const SuccessAnimation = () =>{
    return(
        <div className='fixed flex inset-0 z-50 justify-center items-center bg-black/50 backdrop-blur-sm'>
            <div className='h-35 md:h-40 flex'>
                <Lottie animationData={Success} loop={false} />
            </div>
            
        </div>
    )
}