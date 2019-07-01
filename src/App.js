import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Home from "./components/home/Home";


class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/cart" component={Cart} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
