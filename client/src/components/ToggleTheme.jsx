import { useEffect, useState } from 'react'
import {  Moon,  Sun } from "lucide-react";
const ToggleTheme = () => {
    const [theme,setTheme] = useState("light")

     useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'light'?'dark':'light'
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark',newTheme==='dark')
        localStorage.setItem('theme',newTheme)
    }

  return (
    <div>
        <div className="flex">
          
          <button onClick={toggleTheme} className="p-4 flex items-center justify-center dark:text-white text-black dark:bg-black border dark:border-gray-400 rounded-full h-7 w-7 transition-all ease-in-out duration-300">
           <div className='flex h-6 w-4'> {theme==='light'?<Moon />:<Sun/>}</div>
          </button>
          
          
        </div>
    </div>
  )
}

export default ToggleTheme