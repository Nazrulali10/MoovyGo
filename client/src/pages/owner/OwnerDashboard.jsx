import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const OwnerDashboard = () => {
    const sideBar = [
        {
            name:"Add Movie",
            path:''
        },
         {
            name:"Update Movie",
            path:'/updatemovie'
        },
         {
            name:"Bookings",
            path:'/bookings'
        },
    ]
    const {axios,setauthOwner} = useAppContext()

    const handleLogout = async()=>{
        try {
            const {data} = await axios.get('/api/owner/ownerlogout')
            if(data.success){
                 toast.success(data.message)
                 setauthOwner(false)

            }
            else{
                return toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

  return (
    <div className='w-full h-screen overflow-y-auto'>
        <nav className='flex w-full h-24 border-b border-b-gray-400 justify-center items-center'><img className='h-40 w-60 object-contain' src='/icon.png' alt='icon'/></nav>
        <div className='flex h-[640px]'>
            <div className='w-1/6 flex flex-col border-r border-r-gray-400 h-full items-center'>
            {sideBar.map((item,i)=>(
               
                <div key={i} className='w-full'>
  <NavLink
    to={`/owner${item.path}`}
    className={({ isActive }) =>
      `border-b border-b-gray-400 w-full flex items-center justify-center px-4 py-3 text-sm  focus:outline-none 
       ${isActive ? 'bg-red-500 text-white' : 'bg-white text-black'}`
    }
    end={item.path === ''}
  >
    {item.name}
  </NavLink>
</div>

            ))}
            <button onClick={handleLogout} className='flex rounded-full border px-4 py-2 bg-red-500 w-2/4 text-white justify-center mt-4 text-xs font-medium  hover:bg-red-600 transition-colors transform duration-300'>Logout</button>
            
            </div>
            <div className='w-full'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default OwnerDashboard