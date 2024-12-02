import { useState } from "react";
import RoleDice from "./RoleDice";

let Gameplay = () => {
    let [bgcolor, resetcolor] = useState('')
    const [selectednumber, setselectednumber] = useState()
    const [randomdice, setrandomdice] = useState(1)
    const [score, setscore] = useState(0)
    const [error, seterror] = useState('')
    let diceroll = () => {
        if (score <= -10) {
            alert('Game Over')
            setscore(0)
        }
        if (!selectednumber) {
            return seterror('You have not selected any number')
        }
        setrandomdice((Math.floor((Math.random() * 6) + 1)));
        if (selectednumber === randomdice) {
            setscore((prev) => prev += selectednumber)
        }
        else {
            setscore((prev) => prev -= 2)

        }
        setselectednumber(undefined)
        seterror('')
    }
    console.log(selectednumber);
    let boxexarr = [1,2,3,4,5,6]
    let newarr = boxexarr.map((box, i) => {
        return <div key={i} onClick={() => setselectednumber(box)} className={`bg-${selectednumber === box ? 'black' : 'white' } text-${selectednumber === box ? 'white' : 'black' } w-10 h-10 sm:w-16 sm:h-16 box flex justify-center items-center`}>
            <p className="text-2xl font-bold">{box}</p>
        </div>
    })
    return <div className="container">
        <p className="text-red-500 text-xl float-end my-5 font-bold pr-14">{error}</p>
        <div className=" w-full h-fit gap-8 sm:gap-0 items-center flex-col sm:flex-row flex justify-between px-16 mt-12">
        <div className="head ">
            <div className="left">
                <h2 className="text-7xl font-semibold text-center">{score}</h2>
                <p className="text-xl text-center">Total Score</p>
            </div>
        </div>
            <div className="right flex  flex-col items-end gap-5">
            <div className="boxes flex gap-5">
            {newarr}
            </div>
            <p className="font-bold text-xl">Select Number</p>
            </div>
    </div>
    <RoleDice randomdice={randomdice} setrandomdice={setrandomdice} diceroll={diceroll} score={score} setscore={setscore} />
    </div>
}
export default Gameplay