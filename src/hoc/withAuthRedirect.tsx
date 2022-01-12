import React, {ComponentType} from "react";
import {appStateType} from "../redux/store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type  MapStatePropsType = {
    isAuth : boolean
}

const mapStateToProps = (state: appStateType): MapStatePropsType => {
return{
isAuth: state.auth.isAuth
}
}

export function withAuthRedirect<T>(Component: ComponentType<T>){

   const AuthRedirect =(props: MapStatePropsType) => {
       let {isAuth, ...restProps} = props
debugger
       //If not authorised, redirect to Login
       if (!props.isAuth) return <Redirect to={'/login'}/>

       return <Component {...restProps as T}/>
   }

   const connectedAuthRedirect = connect(mapStateToProps)(AuthRedirect)
   return connectedAuthRedirect

}