import "./console.css";
import Button from "../button/Button";
import Dice from "../dice/Dice";
import Input from "../Input/Input";

const Console = props => {
   const onNewGame = () => props.onNewButtonClick();
   const onRollDice = () => props.onRollButtonClick();
   const onHoldScore = () => props.onHoldScoreClick();
   const onDcieOne = () => props.setDiceOne;
   const onDcieTwo = () => props.setDiceTwo;
    return (
       <div className="console">
          <Button
           type="🔄 &nbsp; NEW GAME"
           handleClickEvent={onNewGame}
           />
          <Dice
            diceNum={onDcieOne}
          />
          <Dice 
            diceNum={onDcieTwo}
          />
          <Button
           type="🎲 &nbsp; ROLL DICE"
           handleClickEvent={onRollDice}
           />
          <Button
           type="📥 &nbsp; HOLD"
           handleClickEvent={onHoldScore}
           />
          <Input />
       </div>
    )
}

export default Console