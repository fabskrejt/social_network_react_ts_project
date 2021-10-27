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
import {PostsDataType, ProfilePageType, state, StateType} from "./redux/state";

type AppPropsType = {
    appState: StateType
}

const App = (props: AppPropsType) => {

    const [posts, setNewPost] = useState<Array<PostsDataType>>(props.appState.profilePage.postsData)
    const addPost = (value: string) => {
        const newPost: PostsDataType = {postText: value, like: 10}
        setNewPost([newPost, ...posts])
    }

    return (
        <BrowserRouter>
            <div className="background">
                <div className="app-container">
                    <Header/>
                    <NavBar/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.appState.profilePage} addPost={addPost}
                                                  posts={posts}/>}/>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.appState.messagesPage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
