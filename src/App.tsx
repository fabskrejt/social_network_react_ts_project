import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className= "background">
        <div className="app-container">
            <header className="header">
                <div>
                    <img className="header__img" src=''/>
                    <span className= 'header__text'>Social Network</span>
                </div>

            </header>
            <nav className= 'nav'>
                <div className= 'nav__item'>
                    Profile
                </div>
                <div className= 'nav__item'>
                    Messages
                </div>
                <div className= 'nav__item'>
                    News
                </div>
                <div className= 'nav__item'>
                    Music
                </div>
                <div className= 'nav__item'>
                    Settings
                </div>
            </nav>
            <main className="main" >
                Main content
            </main>


        </div>
        </div>
    );
}

export default App;
