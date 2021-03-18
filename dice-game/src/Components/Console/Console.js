import "./console.css";
import Button from "../button/Button";
import Dice from "../dice/Dice";
import Input from "../Input/Input";

const Console = () => {
    return (
       <div className="console">
          <Button type="🔄 NEW GAME"/>
          <Dice />
          <Dice />
          <Button type="🎲 ROLL DICE"/>
          <Button type="📥 HOLD"/>
          <Input />
       </div>
    )
}

export default Console