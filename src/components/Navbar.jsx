import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between w-full border-b border-gray pb-6">
                <div className="flex space-x-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-softRed"></div>
                    <div className="w-4 h-4 rounded-full bg-softYellow"></div>
                    <div className="w-4 h-4 rounded-full bg-softGreen"></div>
                </div>
                <div className="flex space-x-14 items-center text-black">
                    <p>Rock</p>
                    <p>Paper</p>
                    <p>Scissors</p>
                </div>
                <div className="flex space-x-4 items-center">
                    <button className="rounded-full bg-lightGray p-1 border-black border"><FaMoon /></button>
                    <button className="rounded-full bg-lightGray p-1 border-black border"><FaSun /></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar