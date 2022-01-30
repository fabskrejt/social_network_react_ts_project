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
import {LoginConnect} from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {appStateType} from "./redux/store";
import {initialisedSuccessAC, initialisedTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppPropsType = {
    initialisedAC: () => void
    initialised: boolean
}
class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.initialisedTC()
    }

    render() {
        if(!this.props.initialised){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="background">
                    <div className="app-container">
                        <HeaderContainer/>
                        <NavBar/>
                        <Route path='/profile/:userId?'
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
        )
    }

}

const mapStateToProps = (state: appStateType) => {
    return {
        initialised: state.app.isInitialised
    }
}
export default connect(mapStateToProps, {initialisedTC})(App);
//export default App;
