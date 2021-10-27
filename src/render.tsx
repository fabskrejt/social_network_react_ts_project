import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, StateType} from "./redux/state";


export const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}