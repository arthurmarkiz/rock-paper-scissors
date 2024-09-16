

const Result = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center mt-10">
            <div>
                <h3 className="text-5xl font-bold text-softGreen">You Win!</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-softRed text-white p-6 border-2 border-white rounded-lg shadow-lg shadow-black/40 mt-10 mb-6 px-14">
                <label className="text-4xl font-bold tracking-wide">SCORE</label>
                <div className="text-7xl my-4 flex space-x-10 font-bold items-center">
                    <label>3</label>
                    <label className="text-4xl font-light text-softYellow"> X </label>
                    <label>2</label>
                </div>
                <div className="flex w-full justify-between font-semibold">
                    <p className="-ml-1">Player</p>
                    <p className="mr-3">PC</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Result