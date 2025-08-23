import React, { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import { X } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const UpdateMovie = () => {
  const {currency,movies,fetchMovies} = useAppContext()

  


  const removeItem =async(id)=>{
    try {
      const {data} = await axios.post('/api/owner/updatemovies',{
        id
      })
      if(data.success){
        toast.success(data.message)
        fetchMovies()
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error.message)
    }
  }


  return (
    <div className='flex flex-col w-full h-full py-15 px-40 gap-5 overflow-y-auto'>
      {movies?.map((movie,i)=>(
        <div key={i} className='flex border border-gray-400 p-2 w-full rounded-md '>
          <div className='flex items-center'><img className='w-40 h-55 object-contain rounded-md' src={movie.image[0]} alt={movie.name}/></div>
          <div className='flex flex-col w-180 p-10 gap-2 text-sm text-gray-500 dark:text-white '>
            <p>Movie : {movie.name} {movie.time.year}</p>
            <p>Ticket Price : {currency}{movie.ticketPrice}/-</p>
            <p>Date : {movie.time.date}</p>
            <p>Show Timings : {movie.time.showTime?.join(',')}</p>
            <p>Tickets remaining : {movie.seats.filter(seat=>seat.isAvailable).length}
                
              </p>
          </div>
          
          <div onClick={()=>removeItem(movie._id)} className='flex items-center text-red-600 dark:text-white'>
            
            <X />
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpdateMovie