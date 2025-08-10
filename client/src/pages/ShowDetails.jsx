import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const ShowDetails = () => {
    const {id} = useParams()
    const {Navigate,movies} = useAppContext()
    const movie = movies.find((movie)=>movie._id===id)

    const handleClick = () =>{
      try {
        Navigate(`/showdetails/${id}/selectseat`)
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <div className='w-full px-5 md:px-35'>
      <div className='flex flex-col gap-4 mb-5 md:mb-40'>

      <div className='w-full h-40 md:h-70'><img className='w-full object-cover h-40 md:h-70' src={movie.image[1]} alt={movie.name}/></div>
      
      <div className='flex flex-col gap-1 w-full  '>
        <p className='text-xl md:text-3xl text-black font-semibold'>{movie.name}</p>
        <p className='font-semibold text-sm md:text-base'>{movie.time.year}</p>
        <p className='text-gray-500 text-sm'>{movie.genre}</p>
      </div>

      <div className='flex flex-col mt-5'>
      <p className='text-base md:text-lg text-red-500 font-normal'>About movie :</p>
      <p className='text-gray-600 text-xs md:text-sm mt-1'>{movie.description}</p>
      </div>

      <div>
        <p className='text-xl md:text-3xl text-black font-semibold mt-10'>Cast</p>
      </div>

      <div className='flex '>
        
      <div className='flex md:px-30 items-center w-full justify-between  ' >
        {movie.cast.map((item,i)=>(
          <div key={i} className='flex md:w-full w-18 flex-col items-center '>
          <img  className='flex rounded-full h-15 w-15 md:h-30 md:w-30 object-cover object-center border border-gray-400' src={item}/>
          <p  className='flex text-xs md:text-sm'>{movie.castnames[i]}</p>
          </div>
        ))}
        

      </div>
    
      </div>

      <div className='w-full flex items-center justify-center mt-10'>
        <button onClick={handleClick} className='text-white text-xs md:text-base bg-red-500 rounded-xl px-6 py-2 md:px-12 md:py-3 hover:bg-red-600 transition-colors transform duration-300'>Select seats</button>
      </div>
    </div>
    </div>
    
  )
}

export default ShowDetails