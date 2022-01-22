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
                    <Field name={'Login'} component="input" placeholder="First Name"/>
                </div>
                <div>
                    <label>Password </label>
                    <Field name={'name'} component="input" placeholder="Password"/>
                </div>
                <div>
                    <label>Remember </label>
                    <Field name={'Remember'} component="input" type={'checkbox'}/>
                </div>
                <button type="submit">Submit</button>
            </form>)
        }
        />
    )
}