import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {addMessage, PostsDataType, ProfilePageType, state, StateType} from "./redux/state";

type AppPropsType = {
    appState: StateType
    addPost: (value: string) => void
    addMessage: (value: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="background">
                <div className="app-container">
                    <Header/>
                    <NavBar/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.appState.profilePage} addPost={props.addPost}/>}/>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.appState.messagesPage} addMessage={props.addMessage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
