import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Seat = ({number,isAvailable}) => {
    const [isSelected,setIsSelected] = useState(false)
    const {setSelectedSeats} = useAppContext()
    const generateColour = () =>{
        if(!isAvailable) return 'bg-red-400'
        if(isSelected) return 'bg-yellow-200'
        return 'bg-green-200'
    }
    // const handleClick = ()=> {
    //     if(!isAvailable){
    //         return null
    //     }
    //     else{
    //         setIsSelected(!isSelected)
    //         if(isSelected){
    //             setSelectedSeats([])
    //         }
    //     }
    // }
    const handleClick = () => {
  setIsSelected(!isSelected); // This doesn't change isSelected immediately

  setSelectedSeats(prevSeats => {
    if (isSelected) {
      // This still has the OLD value of isSelected
      return prevSeats.filter(seat => seat !== number); // remove
    } else {
      return [...prevSeats, number]; // add
      
    }
  });
};

  return (
   
    <div onClick={handleClick} className={`md:h-5 md:w-4  md:p-4 p-1 flex items-center justify-center cursor-pointer ${generateColour()}`}>
       <p className='text-xs md:text-base'>{number}</p> 
        </div>
  )
}

export default Seat