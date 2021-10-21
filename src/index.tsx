import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Rusik'},
    {id: 2, name: 'Toshik'},
    {id: 3, name: 'Vovchick'},
    {id: 4, name: 'Dimas'},
    {id: 5, name: 'Kisli'},
]
let messages = [
    {id: 1, textMessage: 'Message 1'},
    {id: 2, textMessage: 'Message 2'},
    {id: 3, textMessage: 'Message 3'},
    {id: 4, textMessage: 'Message 4'},
    {id: 5, textMessage: 'Message 5'},
    {id: 6, textMessage: 'Message 6'},
    {id: 7, textMessage: 'Message 7'},
]

let postsData = [
    {postText: 'Hello my friends', like: 15},
    {postText: 'How are you?', like: 5},
    {postText: 'What are you do?', like: 25},
]

export type DialogsDataPropsType = {
    id: number
    name: string
}

export type  MessagesPropsType = {
    id: number
    textMessage: string
}

export  type PostsDataPropsType = {
    postText: string
    like: number
}
ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messages={messages} postsData={postsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
