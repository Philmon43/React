import React from "react";
import "./app.css";
import Input from "./component/Input/Input";
import Button from "./component/button/Button";
import Card from "./component/Card";
import Axios from "./component/Axios";

class App extends React.Component{
    state = {avatar: []}

    fetchtenAvatar = async () => {
        const res = []
        for(let i = 0; i < 10; i++){
            res.push((await Axios.get("/api")).data.results[0])
        }
       this.setState({avatar: res})
    }

    componentDidMount(){
        this.fetchtenAvatar()
    }
    render(){
        return(
            <div>
                <div className="search"><Input /> <Button type="🔍  &nbsp; Search"/></div>
                <div className="cards">
                    <Card card={this.state.avatar}/>
                </div>
            </div>
        )
    }
}

export default App;