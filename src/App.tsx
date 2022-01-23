import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { LoginConnect} from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="background">
                <div className="app-container">
                    <HeaderContainer/>
                    <NavBar/>
                    <Route path='/profile/'
                           render={() => <ProfileContainer/>}/>
                    <Route exact path='/dialogs'

                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={LoginConnect}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
