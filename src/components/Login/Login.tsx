import React from "react";
import {Form, Field} from 'react-final-form'

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <MyLoginForm/>
        </div>
    )
}
const onSubmit = () => {
    alert(23)
}

export const MyLoginForm = () => {
    return (
        <Form onSubmit={onSubmit} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Login </label>
                    <input type={'text'}/>
                </div>
                <div>
                    <label>Password </label>
                    <input type={'text'}/>
                </div>
                <div>
                    <label>Remember </label>
                    <input type={'checkbox'}/>
                </div>
                <button>Submit</button>
            </form>)
        }
        />

    )
}