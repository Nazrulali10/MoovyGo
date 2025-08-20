import React from 'react'
import { useAppContext } from '../context/AppContext'
import { generateDate } from '../assets/assets'

const MovieCard = ({movie}) => {
  console.log("Date value:", movie.time.date);
  const {Navigate} = useAppContext()



  return (
    <div onClick={()=>{Navigate(`/showdetails/${movie._id}`)}} className='relative h-auto w-44 md:h-110 md:w-70 border border-gray-500 rounded-xl shadow-md cursor-pointer hover:scale-105 '>
        <div className=' bg-black'><img src={movie.image[0]} alt={movie.name} className='h-60 md:h-90 w-full object-cover transition-transform duration-300 ease-in-out ' /></div>

        <div className='px-3 py-2 md:px-5 md:py-4 flex flex-col gap-1'>
       
        <h1 className='text-xs md:text-sm font-semibold text-black'>{movie.name}</h1>
      
        
       
       
        <p className='text-xs md:text-sm'>{generateDate({movie})}</p>
        </div>
    </div>
  )
}

export default MovieCard