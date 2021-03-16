import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "blue" };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => this.setState({ favoriteColor: "green" }), 1000);
  }

  componentDidUpdate() {
    this.myRef.current.textContent = this.state.favoriteColor
  }

  render() {
    return (
      <div>
        <h1>“My favorite color is blue {this.state.favoriteColor}</h1>
        <div id="myid" ref={this.myRef}></div>
      </div>
    );
  }
}

export default App;
