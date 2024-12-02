import { useState } from "react"
import Showrules from "./Showrules"

const RoleDice = ({randomdice, setrandomdice, diceroll, score, setscore}) => {
    let [rulesdata, setrulesdata] = useState(false)
    let showrules = () => {
      
    }

    return <div className="container">
    <div className="flex flex-col mt-8 w-fit mx-auto text-center justify-center mt-2">
            <img onClick={diceroll}  className="w-[225px]" src={`/Images/dice_${randomdice}.png`} alt="dice-1" />
            <p className="font-bold text-xl mb-3">Click on Dice to roll</p>
            <button onClick={() => setscore(0)} className="mb-2 rules border py-2 font-bold reset rounded">Reset Score</button>
            <button onClick={() => setrulesdata(!rulesdata)} className="bg-black rulesbtn text-white hover:font-bold py-2 rounded my-3">{rulesdata ? 'Hidden Rules' : 'Show Rules'}</button>
    </div>
    {rulesdata ? <Showrules/> : ''}
    
</div>
}
export default RoleDice