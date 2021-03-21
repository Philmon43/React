import React from "react";
import Axios from "./Axios";

class App extends React.Component{
    state = {jokes: [], catagories: []};

    setCatagories = async () => {
        this.setState({catagories: (await Axios.get("/jokes/categories")).data})
    }

    setJokes = async (catagory) => {
        const joke =(await Axios.get("jokes/random?category="+catagory)).data.value
        this.setState({jokes: joke})
    }

    setButtons = () => {
        return this.state.catagories.map((catagory, i ) => {
            return <button onClick={() => this.setJokes(catagory)} key={i} style={{margin: "5px"}}>{catagory}</button>
        });
    }
    componentDidMount(){
        this.setCatagories()
    }
    render(){
        return <div>
            <div>
                {this.setButtons()}
            </div>
            {this.state.jokes}
        </div>
    }
}

export default App