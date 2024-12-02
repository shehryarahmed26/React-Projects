let Startgame = ({togglebtn}) => {
    return <div className="flex flex-col sm:flex-row w-full h-screen justify-center items-center px-5">
        <img className="w-[550px]" src="/Images/Dices.png" alt="" />
        <div className="content flex flex-col justify-center items-center">
            <h1 className="text-5xl sm:text-7xl font-bold">Dice Game</h1>
            <button onClick={togglebtn} className="bg-black text-white text-1xl px-16 py-2 rounded float-end mt-8 play transition">Play Now</button>
        </div>
    </div>
}
export default Startgame