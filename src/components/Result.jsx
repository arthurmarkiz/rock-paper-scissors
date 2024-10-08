

const Result = ({result, userScore, pcScore}) => {

    let resultText
    let resultColor

    if (result === 'Win') {
        resultText = 'You Win!'
        resultColor = 'text-softGreen'
    }
    if (result === 'Lost') {
        resultText = 'You Lost!'
        resultColor = 'text-softRed'
    }
    if (result === 'Draw') {
        resultText = "Draw!"
        resultColor = 'text-softYellow'
    }

    return (
        <>
        <div className="border-b border-gray w-full"></div>
        <div className="flex flex-col justify-center items-center mt-10">
            <div>
                <h3 className={'text-5xl font-bold ' + resultColor}>
                    {resultText}
                </h3>
            </div>
            <div 
            className="flex flex-col justify-center items-center bg-softRed text-white p-6 border-2 border-white rounded-lg 
            shadow-lg shadow-black/40 dark:shadow-[#000]/60 mt-5 mb-6 px-14 w-[310px]">
                <label className="text-4xl font-bold tracking-wide">SCORE</label>
                <div className="text-7xl my-4 flex space-x-10 font-bold items-center">
                    <label>{userScore}</label>
                    <label className="text-4xl font-light text-softYellow"> X </label>
                    <label>{pcScore}</label>
                </div>
                <div className="flex w-full justify-between font-semibold">
                    <p className="">Player</p>
                    <p className="mr-3">PC</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Result