import React from "react"
import  "./input.css"
class Input extends React.Component{
    state = {val: ""}

    handleChange = async (e) => {
        this.setState({val: e.target.value})
        // await this.props.instaFilter(e.target.value)
    }

    render(){
        return (
            <input
                className="input" 
                value={this.state.number}
                onChange={e => this.handleChange(e)}
                type="text"
            />
        )
    }
}

export default Input