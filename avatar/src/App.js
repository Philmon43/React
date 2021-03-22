import React from "react";
import "./app.css";
import Input from "./component/Input/Input";
import Button from "./component/button/Button";
import Card from "./component/Card";
import Axios from "./component/Axios";

class App extends React.Component{
    state = {avatar: [], filtered: []}

    fetchtenAvatar = async () => {
        const res = []
        for(let i = 0; i < 10; i++){
            res.push((await Axios.get("/api")).data.results[0])
        }
       this.setState({avatar: res})
    }

    setInstaFilter = (val) => {
        const filtered =  this.state.avatar.filter((avtr) => {
            return avtr.name.first.toLowerCase().split("").splice(0, val.length).join("") === val
        });
        this.setState({filtered: filtered})
    }
    sendDataToCard = () => {
       if(this.state.filtered.length > 0){
           return this.state.filtered
       }else{
           return this.state.avatar
       }
    }
    async componentDidMount(){
        await this.fetchtenAvatar()
    }
    render(){
        return(
            <div>
                <div className="search"><Input instaFilter={(val) => this.setInstaFilter(val)}/> <Button type="🔍  &nbsp; Search"/></div>
                <div className="cards">
                    <Card card={this.sendDataToCard()}/>
                </div>
            </div>
        )
    }
}

export default App;