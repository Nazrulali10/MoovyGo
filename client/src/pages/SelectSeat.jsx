import React, { useState } from "react";
import Seat from "../components/Seat";
import { useParams } from "react-router-dom";
import { generateDate } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";


const SelectSeat = () => {
  const { id } = useParams();
  const { Navigate, selectedSeats, authUser,setSelectedShow,selectedShow,currency,movies,axios } = useAppContext();
  const movie = movies.find((item) => item._id === id);


  const ticketPrice = ()=>{
       return selectedSeats?movie.ticketPrice*selectedSeats.length:movie.ticketPrice
      }

  const handleClick = async() => {
    try {
      
      if (selectedSeats.length === 0) {
        toast.error("Please select seat before confirming");
        return;
      }
      if(!selectedShow){
          toast.error("Please select show time")
          return
        }
      if (!authUser) {
        toast.error("Sign in before confirming");
        return;
      }
      
      const bookingData = {
        name:authUser?.name,
    moviename:movie.name,
    screen:movie.screen,
    seats:selectedSeats,
    ticketPrice:ticketPrice(),
    date:movie.time.date,
    time:selectedShow
      }
      const {data} = await axios.post('/api/booking/submitbooking',bookingData)
      toast.success(data.message)
      Navigate(`/showdetails/${id}/selectseat/ticket`);
      
    } catch (error) {
      toast.error(error.message);
    }
    
  };
  return (
    <div className="w-full h-auto flex flex-col px-10 md:px-30 overflow-x-hidden">

      <div className="w-full flex justify-center items-center pt-10 mb-10">
      <div className="flex flex-col w-30 md:w-43">
        <h1 className="text-xl md:text-3xl text-black font-medium">Select Seats</h1>
        <div className="w-full h-0.5 mt-1 rounded-full bg-red-500"></div>
      </div>
      </div>

      <div className="flex md:flex-row flex-col md:mb-0 mb-10">
      <div className="w-90">
      <p className="text-xl md:text-3xl font-semibold flex">{movie.name} {movie.time.year}</p>
      <div className="flex flex-col mt-5 gap-1">
        <div className="flex h-4 w-25 items-center justify-between">
          <p className="text-xs ">Available</p>{" "}
          <div className="w-3 h-3 bg-green-200"></div>
        </div>
        <div className="flex h-4 w-25 items-center justify-between">
          <p className="text-xs">not Available</p>{" "}
          <div className="w-3 h-3 bg-red-400"></div>
        </div>
        <div className="flex h-4 w-25 items-center justify-between">
          <p className="text-xs">Selected seats</p>{" "}
          <div className="w-3 h-3 bg-yellow-200"></div>
        </div>
      </div>
      </div>

      <div className="w-full h-[480px] flex flex-col justify-center items-center">
        <div className="grid grid-cols-8 gap-3">
          {movie.seats.map((item, i) => (
            <Seat key={i} number={item.number} isAvailable={item.isAvailable} />
          ))}
        </div>
        <div className="mt-5 flex w-40 md:w-[500px] h-4 bg-gray-300 rounded-full"></div>
      </div>


      <div className="flex flex-col h-20 justify-center mt-4 w-full md:w-100 gap-5 text-sm">
        <p>Date : {generateDate({movie})}</p>
        <div className="flex gap-2 text-sm md:text-base items-center">
          
          <p >Select show time</p>
          <select
            className="focus:outline-none border border-red-500 text-xs px-4 py-1 rounded-lg"
            onChange={(e) => setSelectedShow(e.target.value)}
          >
            <option value="" hidden className="text-xs hover:bg-red-400">choose</option>
            {movie.time.showTime.map((show, i) => (
              <option className="text-xs hover:bg-red-400" key={i} value={show}>
                {show}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full items-center text-sm md:text-base">
          Ticket price :<p className="text-red-500 pl-2">{currency}{ticketPrice()}/-</p>
        </div>
        <div className="flex justify-center w-full">
         <button
          onClick={handleClick}
          className="text-white bg-red-500 rounded-xl px-3 md:px-7 w-30 md:w-full py-3 md:py-3 text-sm md:text-base hover:bg-red-600 transition-colors transform duration-300"
        >
          Confirm seats
        </button>
        </div>
      </div>


      
      </div>
    </div>
  );
};

export default SelectSeat;
