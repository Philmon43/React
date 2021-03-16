import React from "react"
import "./style.css"
class HideandSeek extends React.Component{
    constructor(props){
        super(props)
        this.isVisible = "none"
    }
    handleDisplay(){
        this.setState({isVisible: "none"})
    }
    render(){
        return(
        <div>
            <button onClick={this.handleDisplay.bind(this)}>Hide/Seek</button>
            <div className="hideandseek"  style={{display: this.isVisible}}></div>
        </div>
        )
    }
}

export default HideandSeek