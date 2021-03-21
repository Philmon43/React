import React from "react"
import  "./input.css"
class Input extends React.Component{
    state = {val: ""}
    inputRef = React.createRef()

    handleSubmit = (e) =>{
        e.preventDefault()
    }
    handleChange = async (e) => {
        this.setState({val: e.target.value})
    }

    componentDidMount(){
       this.inputRef.current.focus()
    }

    setFocas = () => {
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                 <input
                    ref={this.inputRef}
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