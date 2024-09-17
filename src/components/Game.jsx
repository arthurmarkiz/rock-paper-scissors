import RockHand from "../public/rock-hand.svg"
import PaperHand from "../public/paper-hand.svg"
import ScissorsHand from "../public/scissors-hand.svg"
import Result from "./Result.jsx"
import { useState } from "react"


const Game = () => {
    const [userChoice, setUserChoice] = useState()
    const [pcChoice, setPcChoice] = useState()
    const [result, setResult] = useState()

    const [userScore, setUserScore] = useState(0)
    const [pcScore, setPcScore] = useState(0)

    const [gameStarted, setGameStarted] = useState(false)

    const options = ['Rock', 'Paper', 'Scissors']

    const determineWinner = (user, pc) => {
        if (user === pc)
            return 'Draw'

        if (
            (user === 'Rock' && pc === 'Scissors') ||
            (user === 'Scissors' && pc === 'Paper') ||
            (user === 'Paper' && pc === 'Rock')
        ) {
            setUserScore(prev => prev + 1)
            return 'Win'
        }
        else {
            setPcScore(prev=>prev+1)
            return 'Lost'
        }
    }

    const handleClick = (choice) => {
        setUserChoice(choice)
        const pc = options[Math.floor(Math.random() * options.length)]
        setPcChoice(pc)

        const gameResult = determineWinner(choice, pc)
        setResult(gameResult)

        setGameStarted(true)
        }
    

    const handleReset = () => {
        setUserChoice('')
        setPcChoice('')
        setUserScore(0)
        setPcScore(0)
        setResult('')
    }

    if (userScore >= 10) {
        handleReset()
    }
    if (pcScore >= 10) {
        handleReset()
    }

    let fillBg
    if (!gameStarted)
        fillBg = 'mb-[270px]'
    if (gameStarted)
        fillBg =  ''

    return (
        <>
        <div className={"flex space-x-36 justify-center items-center mt-6 mb-12 mr-5 " + fillBg}>
            <button 
                key='Rock'
                className="hover:scale-105 duration-300"
                onClick={()=>handleClick('Rock')}    
            >
                <img className="h-36 mt-12" src={RockHand} />
            </button>
            <button 
                key='Paper'
                className="hover:scale-105 duration-300"
                onClick={()=>handleClick('Paper')} 
            >
                <img className="h-56" src={PaperHand} />
            </button>
            <button
                key='Scissors'
                className="hover:scale-105 duration-300"
                onClick={()=>handleClick('Scissors')}    
            >
                <img className="h-44 mt-6" src={ScissorsHand} />
            </button>
        </div>
        {gameStarted && <>
            <div className="flex space-x-24 mb-8 justify-center text-black dark:text-white">
                <p>👼 Your Choice: <span className="font-bold ml-3">{userChoice}</span></p>
                <p className="font-extrabold">VS</p>
                <p>💻 PC Choice: <span className="font-bold ml-3">{pcChoice}</span></p>
            </div>
            <Result result={result} userScore={userScore} pcScore={pcScore}/>
            <div>
                <button 
                    className="bg-softYellow px-8 py-2 mt-8 mb-10 rounded-md font-bold tracking-wide 
                    hover:scale-105 hover:brightness-110 duration-300"
                    onClick={handleReset}
                    >
                        Reset
                    </button>
            </div>
            <div className="border-b border-gray w-full"></div>
            </>
        }
        </>
    )
}

export default Game