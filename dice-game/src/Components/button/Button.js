import "./button.css"
const Button = ({type, handleClickEvent}) => {
    return(
        <div
         className="cutome_btn row-of-icons"
         onClick={handleClickEvent}
         >
        {type}</div>
    )
}

Button.defaultProps = {
    type: "Click",
    handleClickEvent: () => {
        console.log("Whats's up?");
    },
}


export default Button