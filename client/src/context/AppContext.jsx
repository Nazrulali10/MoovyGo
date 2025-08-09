import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from "react-hot-toast";

axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

const AppContext = createContext()

export const AppContextProvider = ({children})=>{
    const Navigate = useNavigate()


    

    const checkAuth = async()=>{
        try {
            const {data} = await axios.get('/api/user/checkauth')
        if(data.success){
            setauthUser(data.user)
        }
        else{
            setauthUser(false)
        }
        } catch (error) {
            toast.error(error.message)
        }
    }


    const fetchMovies = async() =>{
        try {
            setHomeLoading(true)
            const {data} = await axios.get('/api/owner/movieslist')
            if(data.success){
                setMovies(data.movies)
                setHomeLoading(false)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
            setHomeLoading(false)
        }
    }


    const fetchBookings = async()=>{
        try {
            const {data} = await axios.get('/api/booking/getbookings')
            if(data.success){
                setBookings([...data.bookings])
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
             toast.error(data.message)
             console.log(error.message)
        }
    }

     const OwnercheckAuth = async()=>{
        try {
            const {data} = await axios.get('/api/owner/ownercheckauth')
        if(data.success){
            setauthOwner(true)
        }
        else{
            setauthOwner(false)
        }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const [selectedSeats,setSelectedSeats] = useState([])
    const [movies,setMovies] = useState([])
    const [selectedShow,setSelectedShow] = useState(null)
    const [authUser,setauthUser] = useState(false)
    const [showLogin,setShowLogin] = useState(false)
    const [searchQuery,setSearchQuery] = useState({})
    const [bookings,setBookings] = useState([])
    const [showAnimation,setShowAnimation] = useState(false)
    const [authOwner,setauthOwner] = useState(false)
    const [homeLoading,setHomeLoading] = useState(false)
    const currency = import.meta.env.VITE_CURRENCY


    useEffect(()=>{
    fetchMovies()
  },[])

    const value={axios,Navigate,selectedSeats,setSelectedSeats,setSelectedShow,selectedShow,authUser,setauthUser,setShowLogin,showLogin,currency,setSearchQuery,searchQuery,checkAuth,bookings,fetchBookings,movies,fetchMovies,setShowAnimation,showAnimation,authOwner,setauthOwner,OwnercheckAuth,homeLoading,setHomeLoading}
return(
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
)
}
export const useAppContext = ()=>{
    return useContext(AppContext)
}