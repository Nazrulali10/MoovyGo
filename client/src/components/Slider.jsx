import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Slider = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const {movies} = useAppContext()
    if (!movies || movies.length < 5) return null

 
  const slides = movies.slice(1, 5).map((movie) => ({
    image: movie.image?.[1],
    name: movie.name
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
    <div className='flex relative w-full md:h-80 h-70 overflow-hidden hover:brightness-60 transition duration-300'>
        <div className='absolute inset-0 flex transition-transform duration-700 h-full z-0' style={{transform:`translateX(-${currentIndex*100}%)`}}>
            {
        slides?.map((slide,i)=>(
            <img className='w-full object-cover h-full filter brightness-75 rounded-lg flex-shrink-0 ' key={i} src={slide.image} alt={slide.name}/>
        ))
        }
        </div>
        <div className='absolute z-10 flex justify-center w-full h-full items-end pb-8'>
            <button className='text-white border border-white rounded-xl px-5 py-2 hover:bg-red-600 transition duration-300 hover:border-none'>Explore</button>
        </div>

    </div>
  )
}

export default Slider