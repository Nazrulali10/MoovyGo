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

      {/* <div className='relative w-full'>
       <img className='absolute inset-0 w-full h-80 filter brightness-50 blur-md z-0' src={movie.image[0]} />

       <div className='z-10'>
        <img className='w-full object-cover h-40 md:h-70' src={movie.image[1]} alt={movie.name}/>
       
      <div className='flex flex-col gap-1 w-full  '>
        <p className='text-xl md:text-3xl text-black font-semibold'>{movie.name}</p>
        <p className='font-semibold text-sm md:text-base'>{movie.time.year}</p>
        <p className='text-gray-500 text-sm'>{movie.genre}</p>
      </div>
      </div>
       </div> */}
       <div className='relative w-full h-[300px] md:h-[400px]'>
       
        <img
          src={movie.image[0]}
          className='absolute inset-0 w-full h-full object-cover filter brightness-30 z-0'
          alt='Background'
        />

       
        <div className='relative z-10 flex flex-col items-center justify-end h-full px-4 pb-6 md:pb-10'>
     
          <img
            src={movie.image[1]}
            alt={movie.name}
            className='w-full h-40 md:w-44 md:h-64 object-cover rounded-xl shadow-lg '
          />
          
          <p className='text-white font-semibold text-xl md:text-3xl mt-4'>{movie.name}</p>
          <p className='text-white text-sm md:text-base'>{movie.time.year}</p>
          <p className='text-gray-300 text-sm'>{movie.genre}</p>
        </div>
      </div>

      <div className='flex flex-col mt-5'>
      <p className='text-base md:text-lg text-red-500 font-normal'>About movie :</p>
      <p className='text-gray-600 text-xs md:text-sm mt-1'>{movie.description}</p>
      </div>

      <div>
        <p className='text-2xl md:text-3xl text-black font-semibold mt-10'>Cast</p>
      </div>

      <div className='flex '>
        
      <div className='grid grid-cols-2 md:grid-cols-5 md:px-30 items-center w-full justify-between gap-1' >
        {movie.cast.map((item,i)=>(
          <div key={i} className='flex w-full flex-col items-center '>
          <img  className='flex rounded-full h-30 w-30 object-cover object-center border border-gray-400' src={item}/>
          <p  className='flex text-xs md:text-sm'>{movie.castnames[i]}</p>
          </div>
        ))}
        

      </div>
    
      </div>

      <div className='w-full flex items-center justify-center mt-10'>
        <button onClick={handleClick} className='text-white text-sm md:text-base bg-red-500 rounded-xl px-7 py-3 md:px-12 md:py-3 hover:bg-red-600 transition-colors transform duration-300'>Select seats</button>
      </div>
    </div>
    </div>
    
  )
}

export default ShowDetails