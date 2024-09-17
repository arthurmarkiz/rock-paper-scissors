

const Header = () => {
    return (
        <>
        <header className="pt-8 flex flex-col items-center text-black dark:text-white mb-8
        max-sm:text-center max-lg:text-center max-sm:mb-0">
            <h1 className="text-5xl font-extrabold mb-4 max-sm:text-2xl max-lg:text-4xl"
            >Rock, Paper, Scissors</h1>
            <p className="text-sm max-sm:hidden"
            >It's a great game to have fun and pass the time.</p>
            <p className="text-sm">Choose your move and <span className="font-semibold text-softGreen">Good Luck!</span></p>
        </header>
        </>
    )
}

export default Header