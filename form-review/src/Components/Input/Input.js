import React from "react"
import  "./input.css"
class Input extends React.Component{
    state = {term: ""}
    
    render(){
        return (

                 <input
                    className="input" 
                    value={this.state.term} 
                    onChange={e => this.setState({term: e.target.value})} 
                    type="text"
                    />
        )
    }
}

export default Input