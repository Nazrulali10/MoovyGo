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

      <nav className="relative bg-white dark:bg-neutral-950 shadow w-full h-18 flex flex-row-reverse justify-between px-5 md:px-30 items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
          <div className="bg-white rounded-full">
             <img className="h-6 md:h-9 object-contain p-1 md:p-1" src="/icon.png" alt="icon" />
          </div>
           
          </Link>
          {
            authUser?
             <button onClick={handleclick} className="rounded-full border border-gray-400 px-4 md:px-6 py-1 text-black text-xs md:text-sm dark:text-white  dark:hover:bg-white dark:hover:text-black transition duration-300">Logout</button>:
             <button onClick={()=>setShowLogin(true)} className="rounded-full border border-gray-400 px-4 md:px-6 py-1 text-black text-xs md:text-sm dark:text-white dark:hover:bg-white dark:hover:text-black transition duration-300" >Login</button>
          }
         
        </div>

       

        <div className="flex items-center">
          <div className=" md:flex-row md:mx-6 hidden md:flex">
            <Link to={'/'}
              className=" text-gray-700 dark:text-white transition-colors duration-200 transform  hover:text-red-500  md:mx-4 "
              
            >
              All Shows
            </Link>
          </div>

          <div className="relative  md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center px-3 dark:text-white text-gray-400">
              <Search size={16} />
            </span>

            <input
              type="text"
              onChange={handleChange}
              className="w-42 md:w-60 px-8 py-2 md:py-2 text-sm text-gray-700 dark:text-white bg-white dark:bg-neutral-950 border-1 dark:border-gray-500 border-gray-700 rounded-full focus:outline-none caret-red-500"
              placeholder="Search"
              
            />
            
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default NavigationBar;
