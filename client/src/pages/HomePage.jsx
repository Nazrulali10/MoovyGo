import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { useAppContext } from '../context/AppContext'
import CardSkeleton from '../components/CardSkeleton'




const HomePage = () => {
const {searchQuery,movies,homeLoading,setHomeLoading} = useAppContext()
const [filteredMovies,setFilteredMovies] = useState([])

  useEffect(()=>{
    if(searchQuery.length>0){
    setFilteredMovies(movies.filter((movie)=>movie.name.toLowerCase().includes(searchQuery.toLowerCase())))
    }
    else{
      setFilteredMovies(movies)
    }
  },[searchQuery,movies])
 
  return (
    <div className='w-full h-auto md:px-15 bg-white'>

      <div className='flex w-full justify-center items-center mt-10 px-4'>
      <div  className='flex flex-col mb-15 '>
         <div className='text-3xl md:text-3xl font-bold '>Book Tickets Now
          <div className='w-full h-0.5 rounded-full bg-red-500 mt-2'></div>
         </div>
      </div>
      </div>
      
        <div>
          {!homeLoading?
      <div className='md:px-15 px-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10'>
      {filteredMovies.map((movie,i)=>(
         
        <MovieCard key={i} movie={movie}/>
         
      ))}
     </div>:
      <div className='md:px-15 px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10'>
        {
          [...Array(8)].map((_,i)=>(
            <CardSkeleton key={i} />
          ))
        }
        
      </div> }
        </div>
     
      


    </div>
  )
}
export default HomePage