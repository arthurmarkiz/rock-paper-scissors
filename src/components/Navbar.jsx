import { useRef } from "react"


const Navbar = () => {
    const dialogRef = useRef(null)

    const toggleDialog = () => {
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal()
    }

    return (
        <>
            <nav className="flex justify-between items-center w-full border-b border-gray pb-6
            max-lg:flex-col max-lg:space-y-8">
                <div className="flex space-x-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-softRed"></div>
                    <div className="w-4 h-4 rounded-full bg-softYellow"></div>
                    <div className="w-4 h-4 rounded-full bg-softGreen"></div>
                </div>
                <div className="flex space-x-14 items-center text-black dark:text-white
                max-lg:hidden">
                    <p>Rock</p>
                    <p>Paper</p>
                    <p>Scissors</p>
                </div>
                <div className="flex space-x-4 items-center">
                    <button 
                        onClick={toggleDialog}
                        className="bg-softRed text-white font-semibold tracking-wide px-6 py-1 
                        rounded-md shadow-md shadow-black/30 hover:scale-105 hover:brightness-110 duration-300 outline-none">
                            Rules
                    </button>
                </div>
                <dialog 
                    ref={dialogRef}
                    className="backdrop:bg-black/90 rounded-lg shadow-lg shadow-black/70 bg-white dark:bg-purple"
                    onClick={(e)=>{
                        if (e.currentTarget === e.target) {
                            toggleDialog()
                        }
                    }}>
                    <div className="flex flex-col p-10 justify-center items-center text-black dark:text-white">
                        <h1 className="text-4xl font-extrabold mb-8 max-sm:text-3xl">The Basic Rules of RPS</h1>
                        <div className="flex flex-col max-sm:items-center">
                            <label className="flex items-center space-x-3">
                                <div className="w-3 h-3 rounded-full bg-softRed"></div>
                                <p>Rock wins against scissors.</p>
                            </label>
                            <label className="flex items-center space-x-3 mt-4">
                                <div className="w-3 h-3 rounded-full bg-softYellow"></div>
                                <p>Scissors wins against paper.</p>
                            </label>
                            <label className="flex items-center space-x-3 mt-4">
                                <div className="w-3 h-3 rounded-full bg-softGreen"></div>
                                <p>Paper wins against rock.</p>
                            </label>
                            <p className="my-8 font-semibold">The game will end when any player reaches 10 points.</p>
                        </div>
                        <button 
                            onClick={toggleDialog}
                            className="bg-softRed text-white font-semibold tracking-wide px-6 py-1 
                        rounded-md hover:scale-105 hover:brightness-110 duration-300 outline-none">
                            Close
                        </button>
                    </div>
                </dialog>
            </nav>
        </>
    )
}

export default Navbar