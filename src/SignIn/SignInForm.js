import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import Container from "../Container";

let SignInForm =(props) =>{

    return(
            <div className={'container-form'}>
                <form onSubmit={props.handleSubmit} >
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
                    <button type={'submit'} > SignIn</button>
                </form>
            </div>

    )
}

SignInForm = reduxForm({
    form : "signForm"
})(SignInForm)
export default SignInForm