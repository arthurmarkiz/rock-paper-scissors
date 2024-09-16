import RockHand from "../public/rock-hand.svg"
import PaperHand from "../public/paper-hand.svg"
import ScissorsHand from "../public/scissors-hand.svg"
import Result from "./Result.jsx"


const Game = () => {
    return (
        <>
        <div className="flex space-x-36 justify-center items-center mt-6 mb-12 mr-5">
            <button className="hover:scale-105 duration-300"><img className="h-36 mt-12" src={RockHand} /></button>
            <button className="hover:scale-105 duration-300"><img className="h-56" src={PaperHand} /></button>
            <button className="hover:scale-105 duration-300"><img className="h-44 mt-6" src={ScissorsHand} /></button>
        </div>
        <div className="border-b border-gray w-full"></div>
        <Result />
        <div>
            <button className="bg-softYellow px-8 py-2 mt-8 mb-10 rounded-md font-bold tracking-wide hover:scale-105 hover:brightness-110 duration-300">Reset</button>
        </div>
        <div className="border-b border-gray w-full"></div>
        </>
    )
}

export default Game