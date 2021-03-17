import React from "react"
import "./app.css"
export default class App extends React.Component{
    state = {
        counter: 0,
        colors: ["indianred", "green", "yellow", "dodgerblue", "orange"],
        currentColor: function(){return this.colors[this.counter]},
        borderRadius: function(){return this.counter===5?"50%": ""}
    }

    componentDidMount(){
       setInterval(() => {
           if(this.state.counter<5){
                this.setState({counter: this.state.counter+1})
           }else{
                window.clearInterval()
           }
       },500)
    }
    
    render(){
        return (
            <div className="box" style={{background: this.state.currentColor(), borderRadius:this.state.borderRadius()}}></div>
        )
    }
}