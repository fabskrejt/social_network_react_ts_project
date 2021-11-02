import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, state, StateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

subscribe(renderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
