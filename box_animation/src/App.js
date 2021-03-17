import React from "react"
import Box  from "./Components/Box"
export default class App extends React.Component{
    state = {time: false}
    componentDidMount() {
		setTimeout(() => {
			this.setState({ time: true});
		}, 1000);
	}
    componentDidUpdate(){
        setTimeout(() => {
			this.setState({ time: false});
		}, 4000);
    }
    render(){
        if(this.state.time){
            return(
                <div>
                    <Box boxWidth="100px" boxHeight="100px" />
                    <Box boxWidth="200px" boxHeight="120px" />
                    <Box boxWidth="50px" boxHeight="50px" />
                </div>
             )
        }

        return(
            <div></div>
        )
    } 
}
