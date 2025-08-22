import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Slider = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const {movies,Navigate} = useAppContext()
    if (!movies || movies.length < 5) return null

 
  const slides = movies.slice(1, 5).map((movie) => ({
    image: movie.image?.[1],
    name: movie.name,
    id:movie._id
  }))
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(prevIndex=>prevIndex===slides.length-1?0:prevIndex+1)
        },3000)
        return ()=>{
            clearInterval(interval)
        }
    },[])


  return (
    <div className='flex relative w-full md:h-80 h-70 overflow-hidden '>
        <div className='absolute inset-0 flex transition-transform duration-700 h-full z-20' style={{transform:`translateX(-${currentIndex*100}%)`}}>
            {
        slides?.map((slide,i)=>(
            <img onClick={()=>Navigate(`/showdetails/${slide.id}`)} className='w-full object-cover h-full filter brightness-60 rounded-lg flex-shrink-0 z-20 hover:brightness-45 transition duration-300 ' key={i} src={slide.image} alt={slide.name}/>
        ))
        }
        </div>
        <div className='absolute flex justify-center w-full h-full items-end pb-8'>
            <button onClick={() => window.scrollBy({ top: 380, behavior: 'smooth' })} className='z-20 text-white border border-white rounded-xl px-5 py-2 hover:bg-red-600 transition duration-300 hover:border-none'>Explore</button>
        </div>

    </div>
  )
}

export default Slider