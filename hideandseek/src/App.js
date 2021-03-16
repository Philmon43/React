import React from "react"
import Modal from "./Components/Modal"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {display: true}
        this.handleModalDisplay = this.handleModalDisplay.bind(this)
    }
    handleModalDisplay(){
        const currentState = this.state.display;
        this.setState({ display: !currentState});
    }
    render(){
        return(
            <div>
                <button onClick={this.handleModalDisplay}>Hide/Seek</button>
               {this.state.display&&<Modal />}
            </div>
        )
    }
}

export default App