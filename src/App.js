import React, { Component } from "react";
import Logo from "./components/Logo";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
