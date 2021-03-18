import "./container.css"
const BackGround = (props) => {
    return(
        <div className="main_container">
            {props.children}
        </div>
    )
}

export default BackGround