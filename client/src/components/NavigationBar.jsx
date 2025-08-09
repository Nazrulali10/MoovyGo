import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const NavigationBar = () => {
  const {setShowLogin,setSearchQuery,searchQuery,Navigate,authUser,axios,setauthUser} = useAppContext()
  const handleChange = (e) =>{
    setSearchQuery(e.target.value)
    Navigate('/')
  }
  const handleclick = async()=>{
    try {
      const {data} = await axios.get('/api/user/logout')
      if(data.success){
        toast.success(data.message)
        setauthUser(false)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div>

      <nav className="relative bg-white shadow w-full h-18 flex flex-row-reverse justify-between px-5 md:px-30 items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="h-7 md:h-9 object-contain" src="/icon.png" alt="icon" />
          </Link>
          {
            authUser?
             <button onClick={handleclick} className="rounded-full border border-gray-400 px-4 md:px-6 py-1 text-black text-xs md:text-sm">Logout</button>:
             <button onClick={()=>setShowLogin(true)} className="rounded-full border border-gray-400 px-4 md:px-6 py-1 text-black text-xs md:text-sm" >Login</button>
          }
         
        </div>

       

        <div className="flex items-center">
          <div className=" md:flex-row md:mx-6 hidden md:flex">
            <Link to={'/'}
              className=" text-gray-700 transition-colors duration-200 transform  hover:text-red-500  md:mx-4 "
              
            >
              All Shows
            </Link>
          </div>

          <div className="relative  md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center px-3 ">
              <Search size={16} />
            </span>

            <input
              type="text"
              onChange={handleChange}
              className="w-42 md:w-60 px-8 py-2 md:py-2 text-sm text-gray-700 bg-white border rounded-full focus:outline-none "
              placeholder="Search"
              
            />
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default NavigationBar;
