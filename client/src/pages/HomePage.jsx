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
    <div className='w-full h-auto md:px-22 px-8 bg-white'>

      <div className='flex w-full justify-center items-center mt-10'>
      <div  className='flex flex-col mb-15 '>
         <div className='text-2xl md:text-3xl font-bold w-55 md:w-70'>Book Tickets Now
          <div className='w-full h-0.5 rounded-full bg-red-500 mt-2'></div>
         </div>
      </div>
      </div>
      
        <div>
          {!homeLoading?
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-16'>
      {filteredMovies.map((movie,i)=>(
         
        <MovieCard key={i} movie={movie}/>
         
      ))}
     </div>:
      <div className='gap-5 md:gap-12 flex flex-wrap w-full px-0 md:px-15'>
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