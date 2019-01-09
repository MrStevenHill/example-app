import React, { Component } from "react";
import styled from "styled-components";

import { Example } from "example-lib";

import "./App.css";

const Widget = styled.div`
  color: red;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />
          <Widget>app component</Widget>
        </header>
      </div>
    );
  }
}

export default App;
