import {connect} from "react-redux";
import {signUpUser} from "../apiActions";
import React, {Fragment} from "react";
import {Redirect} from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "../SignIn/SignInForm";
import Container from "../Container";



const SignUpFormContainer =(props)=>{
    const userSignUpSubmit = values => {
        props.userSignUp(values)
    }

    return(
        <Container className='container'>
            {props.user.isError ? (<span>{props.user.errorMsg}</span>) : null }

            {props.user.currentUser.role !== undefined ? (<Redirect to={'/'}/>):(<SignUpForm onSubmit = {userSignUpSubmit}/>)}
        </Container>
    )
}
const mapStateToProps =(state)=>{
    return{
        user: state.user
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        userSignUp: (user)=>dispatch(signUpUser(user)),
    }
}

const SignUpContainer = connect(mapStateToProps,mapDispatchToProps)(SignUpFormContainer)
export default SignUpContainer
