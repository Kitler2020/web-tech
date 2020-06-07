import {Redirect, Route} from "react-router-dom";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserAuth} from "../apiActions";
const mapStateToProps =(state)=>{
    return{
        user: state.user.currentUser


    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        getUserAuth: ()=>dispatch(getUserAuth())
    }
}


const UserRoute = ({user,getUserAuth,component:Component,...rest})=>{
    // useEffect(()=>getUserAuth(localStorage.userId,localStorage.jwt),[])
    // debugger

    return(
        <Route {...rest} render={props => (
            user.role !== undefined ?
                <Component {...props} />
                : <Redirect to="/signin" />
        )} />
    )
}
// debugger

const PrivateRoute = connect(mapStateToProps,mapDispatchToProps)(UserRoute)
export default PrivateRoute
