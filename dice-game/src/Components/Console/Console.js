import "./console.css";
import Button from "../button/Button";
import Dice from "../dice/Dice";
import Input from "../Input/Input";
import {Switch, PopUpOn, Pop} from "../../Hooks/SoundEffect"

const Console = props => {
   const onDcieOne = () => props.setDiceOne;
   const onDcieTwo = () => props.setDiceTwo;
   const onInputValue = (value) => props.handleInputValue(value)
    return (
       <div className="console">
         <Pop>
               <Button
               type="🔄 &nbsp; NEW GAME"
               handleClickEvent={props.onNewButtonClick}
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
               handleClickEvent={props.onRollButtonClick}
               />
          </PopUpOn>
          
           <Switch>
               <Button
               type="📥 &nbsp; HOLD"
               handleClickEvent={props.onHoldScoreClick}
               />
           </Switch>
          <Input sendInput={(value) =>  onInputValue(value)} placeHolder={props.placeHolder}/>
       </div>
    )
}

export default Console