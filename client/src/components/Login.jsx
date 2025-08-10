import React from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
const Login = () => {
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setShowLogin,axios,setauthUser} = useAppContext()

    const handleClick = async()=>{
       try {
        const {data} = await axios.post(`/api/user/${state}`,{
            name,
            email,
            password
        })
        if(data.success){
            setauthUser(data.user)
            toast.success(data.message)
            console.log(data.user)
            setShowLogin(false)
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
                <span className="text-red-500">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "signin" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-500" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-red-500" type="password" required />
            </div>
            {state === "signin" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-red-500 cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("signin")} className="text-red-500 cursor-pointer">click here</span>
                </p>
            )}
            <button onClick={handleClick} className="bg-red-500 hover:bg-red-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
        </div>
    );
};
export default Login