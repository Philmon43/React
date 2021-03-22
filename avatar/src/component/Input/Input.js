import React from "react"
import  "./input.css"
class Input extends React.Component{
    state = {val: ""}

    handleSubmit = (e) =>{
        e.preventDefault()
    }

    handleChange = async (e) => {
        this.setState({val: e.target.value})
        await this.props.instaFilter(e.target.value)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                 <input
                    className="input" 
                    value={this.state.number}
                    onChange={e => this.handleChange(e)} 
                    type="text"
                    />
            </form>
        )
    }
}

export default Input