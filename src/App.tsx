import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionTypes, StateType, StoreType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

/*type AppPropsType = {
    appState: StateType
    dispatch: (action: ActionTypes) => void
}*/

type AppPropsType = {
store:StoreType
}
const App = (props: AppPropsType) => {
    let state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="background">
                <div className="app-container">
                    <Header/>
                    <NavBar/>
{/*                    <Route path='/profile'
                           render={() => <Profile profilePage={props.appState.profilePage}
                                                  dispatch={props.dispatch}/>}/>*/}
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
{/*                    <Route exact path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.appState.messagesPage}
                                                  dispatch={props.dispatch}/>}/>*/}
                    <Route exact path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
