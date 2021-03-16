import React from "react";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: 0}
        this.handleColor = this.handleColor.bind(this)
        this.handleDeacrease = this.handleDeacrease.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
    }

    handleColor(){
        const value = this.state.value
        if(value > 0){
            return "green"
        }else if(value < 0){
            return "red"
        }else{
            return "black"
        }
    }
    handleIncrease(){
        this.state.value<10&&this.setState({value: this.state.value+1})
    }
    handleDeacrease(){
        this.state.value>(-10)&&this.setState({value: this.state.value-1})
    }
    render(){
        return(
            <div>
                <label style={{color: this.handleColor(), fontSize: "50px", display:"block"}}>{this.state.value}</label>
                <button onClick={this.handleIncrease}>Increase</button>  <button onClick={this.handleDeacrease}>Decrease</button>
            </div>
        )
    }
}
export default App