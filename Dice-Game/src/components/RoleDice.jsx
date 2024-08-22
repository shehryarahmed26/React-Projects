import { useState } from "react"

const RoleDice = ({randomdice, setrandomdice, diceroll, score, setscore}) => {
    const [rulesdata, setrulesdata] = useState(false)
    let showrules = () => {
      
    }

    return <div className="container">
    <div className="flex flex-col w-fit mx-auto text-center justify-center mt-10">
            <img onClick={diceroll}  src={`./public/dice_${randomdice}.png`} alt="dice-1" />
            <p className="font-bold text-xl mb-3">Click on Dice to roll</p>
            <button onClick={() => setscore(0)} className="mb-2 rules border py-2 font-bold rounded">Reset Score</button>
            <button className="bg-black  text-white py-2 rounded my-3">Show Rules</button>
            
    </div>
    <div className="bg-[#FBF1F1] p-4 w-[40%] mx-auto mb-5">
    <h3 className="font-bold text-2xl">How to Play dice game</h3>
    <p className="font-bold">Select any Number </p>
    <p className="font-bold">Click on dice game</p>
    <p className="font-bold">after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted </p>
</div>
</div>
}
export default RoleDice