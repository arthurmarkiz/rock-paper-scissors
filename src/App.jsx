import { useState } from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import Game from "./components/Game"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  const handleDarkMode = () => {
    setDarkMode(true)
  }

  const handleLightMode = () => {
    setDarkMode(false)
  }

  return (
    <>
    <div className={darkMode === true ? 'dark' : ''}>
        <div className="bg-white dark:bg-black py-6 px-10 rounded-lg w-[1024px] 
        flex flex-col items-center justify-center relative
        shadow-xl shadow-black/50 dark:shadow-[#000]/50
        max-sm:w-[400px] max-lg:w-[600px] max-ultra-sm:w-[350px]">
          <div>
            <button 
              onClick={handleDarkMode}
              className="absolute top-[28px] right-56 hover:brightness-110 duration-300
              rounded-full bg-lightGray p-1 border-black border dark:border-white
              max-lg:right-16 max-lg:top-5">
                <FaMoon /></button>
            <button 
              onClick={handleLightMode}
              className="absolute top-[28px] right-44 hover:brightness-110 duration-300
              rounded-full bg-lightGray p-1 border-black border dark:border-white
              max-lg:right-6 max-lg:top-5">
                <FaSun /></button>
          </div>
          <Navbar />
          <Header />
          <Game />
          <p className="text-black dark:text-white font-quick mt-6 max-ultra-sm:text-sm">Developed by <span className="font-bold">Arthur Markiz</span> | 
          <a href="https://github.com/arthurmarkiz" className="text-purple font-extrabold"> Github</a></p>
        </div>
      </div>
    </>
  )
}

export default App
