import React from 'react'
import { useAppContext } from '../context/AppContext'
import { generateDate } from '../assets/assets'

const MovieCard = ({movie}) => {
  console.log("Date value:", movie.time.date);
  const {Navigate} = useAppContext()



  return (
    <div onClick={()=>{Navigate(`/showdetails/${movie._id}`)}} className='relative h-auto w-38 md:h-110 md:w-70 border border-gray-500 rounded-lg hover:opacity-90'>
        <div className='bg-black'><img src={movie.image[0]} alt={movie.name} className='h-47 md:h-90 w-full object-contain' /></div>

        <div className='px-3 py-2 md:px-5 md:py-4'>
        <div className='flex gap-2'>
        <h1 className='text-xs md:text-sm font-semibold text-black'>{movie.name}</h1>
        <p className='md:text-sm text-xs text-black'>{movie.time.year}</p>
        </div>
       
        <p className='text-gray-500 text-xs'>{movie.genre}</p>
        <p className='text-xs md:text-sm'>{generateDate({movie})}</p>
        </div>
    </div>
  )
}

export default MovieCard