import "./console.css";
import Button from "../button/Button";
import Dice from "../dice/Dice";
import Input from "../Input/Input";
import {Switch, PopUpOn, Pop} from "../../Hooks/SoundEffect"

const Console = props => {
   const onNewGame = () => props.onNewButtonClick();
   const onRollDice = () => props.onRollButtonClick();
   const onHoldScore = () => props.onHoldScoreClick();
   const onDcieOne = () => props.setDiceOne;
   const onDcieTwo = () => props.setDiceTwo;
   const onInputValue = (value) => props.handleInputValue(value)
    return (
       <div className="console">
         <Pop>
               <Button
               type="🔄 &nbsp; NEW GAME"
               handleClickEvent={onNewGame}
               />
          </Pop>
          <Dice
            diceNum={onDcieOne}
          />
          <Dice 
            diceNum={onDcieTwo}
          />
          <PopUpOn>
               <Button
               type="🎲 &nbsp; ROLL DICE"
               handleClickEvent={onRollDice}
               />
          </PopUpOn>
          
           <Switch>
               <Button
               type="📥 &nbsp; HOLD"
               handleClickEvent={onHoldScore}
               />
           </Switch>
          <Input sendInput={(value) =>  onInputValue(value)} placeHolder={props.placeHolder}/>
       </div>
    )
}

export default Console