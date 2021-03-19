/* eslint-disable jsx-a11y/alt-text */
import "./dice.css"
const Dice = ({diceNum}) => {
    return <div className="dice_container">
        {diceNum() > 0&& diceNum() <= 6 ? <img className="dice_png" src={"/dices/dice-"+diceNum()+".png"} /> : <div></div>}
    </div>
}

export default Dice