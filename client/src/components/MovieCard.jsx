import React from 'react'
import { useAppContext } from '../context/AppContext'
import { generateDate } from '../assets/assets'

const MovieCard = ({movie}) => {
  const {Navigate} = useAppContext()



  return (
    <div onClick={()=>{Navigate(`/showdetails/${movie._id}`)}} className='relative h-auto w-42 md:h-110 md:w-60 bg-gray-50 dark:bg-neutral-900 dark:border-none border border-gray-500  shadow-md cursor-pointer hover:scale-105 transition duration-300 rounded-lg'>
        <div><img src={movie.image[0]} alt={movie.name} className='h-60 md:h-90 w-full object-cover transition-transform duration-300 ease-in-out rounded-t-lg' /></div>

        <div className='px-3 py-2 md:px-5 md:py-4 flex flex-col gap-1'>
       
        <h1 className='text-xs md:text-sm font-semibold text-black dark:text-white'>{movie.name}</h1>
      
        
       
       
        <p className='text-xs md:text-sm  text-black dark:text-white'>{generateDate({movie})}</p>
        </div>
    </div>
  )
}

export default MovieCard