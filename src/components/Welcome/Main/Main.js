import React from 'react';
import './Main.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

const main = (props) => (
    <div className="Main">
        {props.show ? <LoginForm 
                        clickedRegisterButton={props.showRegisterForm} 
                        isRegistered={props.registered}/> : 
                      <RegisterForm 
                        clickedLoginButton={props.showLoginForm}
                        done={props.successfulRegister}/>}
    </div>
)

export default main;