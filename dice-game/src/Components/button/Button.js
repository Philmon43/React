import "./button.css"
const Button = ({type}) => {
    return(
        <div className="cutome_btn row-of-icons">{type}</div>
    )
}

export default Button