//import the react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
    return (
        <div>
            <h1>AppleSeeds React App</h1>
            <button>click me</button>
        </div>
    )
}
//take the react compoennt and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)