import React from "react"
import  "./input.css"
class Input extends React.Component{
    state = {number: 100}
    
    render(){
        return (
            <input className="input" value={this.state.number} onChange={e => this.setState({number: e.target.value})} type="text" />
        )
    }
}

export default Input