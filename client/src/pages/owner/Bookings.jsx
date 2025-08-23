import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const Bookings = () => {
  const {bookings,fetchBookings,currency} = useAppContext()
  const [ownerSearch,setOwnerSearch] = useState(null)
  const [filteredBookings,setFilteredBookings] = useState([])

  const formatDateTime = (timestamp) => {
  const timeValue = Number(timestamp);
  const d = new Date(timeValue);

  if (isNaN(d)) return 'Invalid Date';

  const pad = (n) => String(n).padStart(2, '0');

  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} / ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};


  useEffect(()=>{
    fetchBookings()
  },[])

  useEffect(()=>{
    if(ownerSearch?.length>0){
      setFilteredBookings(bookings.filter((booking)=>booking.name.toLowerCase().includes(ownerSearch?.toLowerCase())))
    }
    else{
      setFilteredBookings(bookings)
    }
  },[ownerSearch,bookings])



  return (
    <div className='flex flex-col w-full h-full py-3 px-30 gap-5 overflow-y-auto'>
      <div className='flex w-full items-center justify-center h-30'>
     <input onChange={(e)=>setOwnerSearch(e.target.value)}  type='text' placeholder='Search by name...' className='w-80 py-2 rounded-full border dark:border-white dark:text-white px-5 caret-red-500'/>
      </div>
      {filteredBookings.map((item,i)=>(
        <div key={i} className='flex border border-gray-400 px-8 py-3 w-full text-xs rounded-md gap-10 items-center hover:border-red-500 dark:bg-gray-100 '>
          <div className='flex'>
            <img className='h-13 w-13' src='/images/bookingsdefault.png' />
          </div>
          <div className='flex flex-col pl-5'>
            <p>Name : {item.name}</p>
            <p>Movie : {item.moviename}</p>
          </div>
           <div className='flex flex-col'>
            <p> Screen : {item.screen}</p>
            <p> Seats : {item.seats.join(',')}</p>
            <p>Ticket Price : {currency}{item.ticketPrice}/-</p>
          </div>
          <div className='flex flex-col'>
            <p>Date: {String(new Date(item.date).getDate()).padStart(2,"0")}-{String(new Date(item.date).getMonth()+1).padStart(2,"0")}-{new Date(item.date).getFullYear()}</p>
            <p>time: {item.time}</p>
            <p>Date/Time : {formatDateTime(item.bookedtime)}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Bookings