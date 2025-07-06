import React, { useEffect, useState } from 'react'

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(()=> {
        if(darkMode){
            document.documentElement.classList.add('dark');
          
        }
        else{
            document.documentElement.classList.remove('dark');
          
        }
    },[darkMode])

    const toogleDarkMode = () => {
       setDarkMode(!darkMode);
    }


  return (
    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white cursor-pointer transition duration-300 ease-in-out'>
        <button 
        className='w-full h-full flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600'
        onClick={toogleDarkMode}
        >
            <i className={` bx bx-${darkMode ? 'sun' : 'moon' } text-lg lg:text-lg`} ></i>
        </button>
    </div>
  )
}

export default Theme