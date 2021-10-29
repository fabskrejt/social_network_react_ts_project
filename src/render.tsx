import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, StateType} from "./redux/state";


export const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}