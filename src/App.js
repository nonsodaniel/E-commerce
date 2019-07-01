import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layouts/Navbar'

class App extends Component {
  state = {};

  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
