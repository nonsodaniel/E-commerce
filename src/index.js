import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import cartRducer from 'cskl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartRuducer);
ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById("root"));
