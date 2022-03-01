import React from "react";
import {Field, Form} from 'react-final-form'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";


type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
export const Login = (props: LoginPropsType) => {
    const onSubmit = (value: any) => {
        props.login(value.Login, value.Password, value.Remember = false)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>Login</h1>
            <MyLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
type MyLoginFormPropsType = {
    onSubmit: (value: any) => void
}
export const MyLoginForm = (props: MyLoginFormPropsType) => {
    const required = (value: string) => (value ? undefined : 'Required')
    return (
        <Form onSubmit={props.onSubmit} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'Login'} component="input" placeholder="Login" validate={required}>
                        {({input, meta}: any) => (
                            <div>
                                <input {...input} type="text" placeholder="Login"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <Field name={'Password'} component="input" placeholder="Password" type={'password'}
                           validate={required}>
                        {({input, meta}: any) => (
                            <div>
                                <input {...input} type="password" placeholder="Password"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <Field name={'Remember'} component="input" type={'checkbox'}/>
                </div>
                <button type="submit">Submit</button>
            </form>)
        }
        />
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginConnect = connect(mapStateToProps, {login})(Login)

