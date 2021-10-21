import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsDataPropsType, MessagesPropsType, PostsDataPropsType} from "./index";


export type AppPropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messages: Array<MessagesPropsType>
    postsData: Array<PostsDataPropsType>
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="background">
                <div className="app-container">
                    <Header/>
                    <NavBar/>
                    <Route path='/profile'
                           render={() => <Profile postsData={props.postsData}/>}/>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs dialogsData={props.dialogsData} messages={props.messages} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
