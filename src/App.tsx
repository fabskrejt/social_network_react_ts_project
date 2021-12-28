import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className="background">
                <div className="app-container">
                    <HeaderContainer/>
                    <NavBar/>
                    <Route path='/profile/:userId'
                           render={() => <ProfileContainer/>}/>
                    <Route exact path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                            render={()=> <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
