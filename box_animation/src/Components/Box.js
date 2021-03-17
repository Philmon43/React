import "./box.css";
const Box = ({boxWidth, boxHeight}) => {
    return <div className="box" style={{width: boxWidth, height: boxHeight}}></div>
}

export default Box