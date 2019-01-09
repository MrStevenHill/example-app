import React, { Component } from "react";
import styled from "styled-components";

import { Example } from "lib";

import logo from "./logo.svg";
import "./App.css";

const Widget = styled.div`
  color: red;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example />

          <Widget>Widget</Widget>
        </header>
      </div>
    );
  }
}

export default App;
