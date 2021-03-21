import React from "react";
import data from "./data";
import Data from "./data";
import Names from "./component/Names";
import Card from "./component/Card";

class App extends React.Component{
    state = {names: [], ultities: [], bornbefore90: []}

    messageData = () => {
        this.setState({ultities: data})
    }

    names = () => {
        const names = Data.map((data) => data.name);
        this.setState({names: names})
    }

    before1990 = () => {
        const res = data.filter((people) => people.birthday.split("-")[2]< 1990)
        this.setState({bornbefore90: res})
    }
    componentDidMount(){
        this.messageData()
        this.names()
        this.before1990()
    }

    render(){
        return <div>
            <Names data={this.state.names}/>
            <Card card={this.state.bornbefore90}/>
        </div>  
    }   
}

export default App;