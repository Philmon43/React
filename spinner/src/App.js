import React from "react"
import Spiner from "./Components/SpinerOne"

export default class App extends React.Component{
    state = { display: true, timer: 0};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ display: false , timer: this.state.timer+1});
		}, 7000);
	}

    render(){
        return(
            <div>
               {this.state.display&&<Spiner />}
            </div>
        )
    }
}