import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import cartRuducer from './components/store/reducers/cartRducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartRuducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
