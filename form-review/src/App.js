import "./app.css";
import React from "react";
import Input from "./Components/Input/Input";
export default class App extends React.Component{
    render(){
        return(
            <form className="form_view">
                <label>First Name: <Input /></label><br/>
                <label> Last Name: <Input /></label><br/>
                <lable>Age: <Input /></lable><br/>
                <lable>Free Text:  <textarea></textarea></lable><br/>
                <input type="submit" value="Continue" />
            </form>
        )
    }
}