import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="background">
            <div className="app-container">
                <Header/>
                <NavBar/>
                <Profile/>

            </div>
        </div>
    );
}

export default App;
