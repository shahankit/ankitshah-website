import React, { Component } from "react";
import "./App.css";
import typewrite from "./helpers/typewrite";

class App extends Component {
  titleNode = React.createRef<HTMLSpanElement>();

  componentDidMount() {
    typewrite(this.titleNode.current!, "Ankit Shah");
  }

  render() {
    return (
      <div className="app">
        <div className="title-container">
          <span ref={this.titleNode} className="title" />
        </div>
      </div>
    );
  }
}

export default App;
