import React from "react";
import "./Cards.css";

class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <img src={this.props.source} alt="ant_image" />
                <div className="card_details">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.paragraph}</p>
                    <a href="#">SHARE</a>
                    <a href="#">EXPLORE</a>
                </div>
            </div>
        )
    }
}


export default Card