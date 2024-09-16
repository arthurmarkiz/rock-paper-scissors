import Game from "./components/Game"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <>
    <div className="bg-white py-6 px-10 rounded-lg w-[1024px] flex flex-col items-center justify-center shadow-xl shadow-black/50">
      <Navbar />
      <Header />
      <Game />

      <p className="text-black font-quick mt-6">Developed by <span className="font-bold">Arthur Markiz</span> | 
      <a href="https://github.com/arthurmarkiz" className="text-purple font-extrabold"> Github</a></p>
    </div>
    </>
  )
}

export default App
