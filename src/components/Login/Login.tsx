import React from "react";
import {Field, Form} from 'react-final-form'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import style from "./Login.module.css"

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    isAuth: boolean
    captchaUrl: null | string
}
export const Login = (props: LoginPropsType) => {
    const onSubmit = (value: any) => {
        props.login(value.Login, value.Password, value.Remember = false, value.Captcha)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <div style={{color: "lightgrey", fontSize: '35px'}}>
                <span>Login for test: free@samuraijs.com</span><br/>
                <span>Password: free</span>
            </div>
            <h1>Login</h1>
            <MyLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
type MyLoginFormPropsType = {
    onSubmit: (value: any) => void
    captchaUrl: null | string
}
export const MyLoginForm = (props: MyLoginFormPropsType) => {
    const required = (value: string) => (value ? undefined : 'Required')
    return (
        <Form onSubmit={props.onSubmit} render={({handleSubmit}) => (
            <form className={style.form} onSubmit={handleSubmit}>
                <div>
                    <Field name={'Login'} component="input" placeholder="Login" validate={required}>
                        {({input, meta}: any) => (
                            <div>
                                <input  {...input} type="text" placeholder="Login"/>
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
                    <label>
                        <Field name={'Remember'} component="input" type={'checkbox'}/>
                        Remember me
                    </label>
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'}/>}
                {
                    props.captchaUrl &&
                    <Field name={'Captcha'} component="input" placeholder="Captcha" validate={required}>
                        {({input, meta}: any) => (
                            <div>
                                <input  {...input} type="text" placeholder="Captcha"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                }
                <button type="submit">Submit</button>
            </form>)
        }
        />
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export const LoginConnect = connect(mapStateToProps, {login})(Login)

