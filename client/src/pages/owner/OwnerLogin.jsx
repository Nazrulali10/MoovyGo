import React from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
const OwnerLogin = () => {
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setShowLogin,axios,setauthOwner} = useAppContext()

    const handleClick = async()=>{
       try {
        const {data} = await axios.post(`/api/owner/ownerlogin`,{
            email,
            password
        })
        if(data.success){
            setauthOwner(data.owner)
            toast.success(data.message)
            console.log(data.owner)
           
        }
        else{
            toast.error(data.message)
            console.log(data.message)
        }
       } catch (error) {
        console.log(error.message)
        toast.error(error.message)
       }
    }

    return (
        <div onClick={()=>setShowLogin(false)} className="fixed right-0 left-0 top-0 bottom-0 z-30 items-center bg-black/50 flex">
        <form onClick={(e)=>{e.stopPropagation(); e.preventDefault() }} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-red-500">Owner</span> Login
            </p>
            
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-500" type="password" required />
            </div>
            
            <button onClick={handleClick} className="bg-red-500 hover:bg-red-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Login
            </button>
        </form>
        </div>
    );
};
export default OwnerLogin