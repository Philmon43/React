import React from "react"

//cards class component
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Cards
//                     title= "My first Card"
//                     source="https://placeimg.com/640/480/any"
//                     paragraph="Random generted images"
//                 />
//                 <Cards
//                     title= "My second Card"
//                     source="https://placeimg.com/640/480/any"
//                     paragraph="Random generted images 2nd"
//                 />
//                 <Cards
//                     title= "My second Card"
//                     source="https://placeimg.com/640/480/any"
//                     paragraph="Random generted images 2nd"
//                 />
//             </div>
//         )
//     }
// }


//********************************************************************
//********************************************************************
//********************************************************************

//increament
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: 0 };
      }
      handleCounter() {
        this.setState({ value: this.state.value + 1 });
      }
      render(){
          return(
              <div>
                <button
                    onClick={this.handleCounter.bind(this)}
                >counter</button> 
                <span> {this.state.value}</span>
            </div>
          )
      }
}


export default Counter;