import React from "react";

class App extends React.Component{
  textRef = React.createRef()
  copyToClipBoard = () => {
    this.textRef.current.select()
    document.execCommand('copy');
  }
  componentDidMount(){
  }
  render(){
    return(
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{height: "500px",width: "500px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <h3>What is the meaning of  life?</h3>
          <textarea ref={this.textRef} />
          <button onClick={this.copyToClipBoard}>copy</button>
        </div>
      </div>
    )
  }
}
export default App