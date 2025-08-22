
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import ShowDetails from "./pages/ShowDetails"
import SelectSeat from "./pages/SelectSeat"
import Ticket from "./pages/Ticket"
import { Toaster } from "react-hot-toast"
import { useAppContext } from "./context/AppContext"
import Login from "./components/Login"
import OwnerDashboard from "./pages/owner/OwnerDashboard"
import Bookings from "./pages/owner/Bookings"
import UpdateMovie from "./pages/owner/UpdateMovie"
import AddMovie from "./pages/owner/AddMovie"
import ScrollToTop from "./components/ScrollToTop"
import { useEffect } from "react"
import { SuccessAnimation } from "./components/animation/Animation"
import OwnerLogin from "./pages/owner/OwnerLogin"


const App = () => {
  const {showLogin,checkAuth,showAnimation,OwnercheckAuth,authOwner} = useAppContext()
  const isOwner = useLocation().pathname.includes("owner")



  useEffect(()=>{
    checkAuth()
    OwnercheckAuth()
  },[])


  return (
    <div className="font-display bg-white dark:bg-neutral-950">
    {isOwner?null:<NavigationBar/>}
    <Toaster position="top-center" 
    containerStyle={{top: '16px',}}/>

    {showLogin?<Login/> :null}
    {showAnimation && <SuccessAnimation/>}
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/showdetails/:id" element={<ShowDetails/>}/>
      <Route path="/showdetails/:id/selectseat" element={<SelectSeat/>}/>
      <Route path="/showdetails/:id/selectseat/ticket" element={<Ticket/>}/>

      <Route path="/owner" element={authOwner?<OwnerDashboard/>:<OwnerLogin/>}>
      <Route index element={<AddMovie/>}/>
      <Route path="updatemovie" element={<UpdateMovie/>}/>
      <Route path="bookings" element={<Bookings/>}/>
      </Route>

    </Routes>
    
     {isOwner?null:<Footer/>}
    </div>
  )
}
export default App