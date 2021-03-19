import React from "react"
import  "./input.css"
class Input extends React.Component{
    state = {number: 100}
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.sendInput(this.state.number)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                 <input
                    className="input" 
                    value={this.state.number} 
                    onChange={e => this.setState({number: e.target.value})} 
                    type="text"
                    autoFocus="none"
                    />
            </form>
        )
    }
}

export default Input