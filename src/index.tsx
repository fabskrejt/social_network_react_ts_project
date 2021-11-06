import './index.css';
import reportWebVitals from './reportWebVitals';
import {store, StateType,/* subscribe*/} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

/*const renderEntireTree = () => {*/
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
/*
}

renderEntireTree()

subscribe(renderEntireTree)*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
