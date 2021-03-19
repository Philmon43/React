import "./console.css";
import Button from "../button/Button";
import Dice from "../dice/Dice";
import Input from "../Input/Input";

const Console = (props) => {
   const onNewGame = () => props.onNewButtonClick();
   const onRollDice = () => props.onRollDiceClick();
   const onHoldScore = () => props.onHoldScoreClick();
    return (
       <div className="console">
          <Button
           type="🔄 NEW GAME"
           handleClickEvent={onNewGame}
           />
          <Dice />
          <Dice />
          <Button
           type="🎲 ROLL DICE"
           handleClickEvent={onRollDice}
           />
          <Button
           type="📥 HOLD"
           handleClickEvent={onHoldScore}
           />
          <Input />
       </div>
    )
}

export default Console