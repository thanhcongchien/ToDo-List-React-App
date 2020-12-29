import React, { Component } from 'react';
import Aux from '../../../../hoc/Axu';
import Input from './Input/Input';
import Button from './Button/Button';
import axios from '../../../../axios/axios';
import Spinner from '../../Spinner/Spinner';
import store from 'store';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    placeholderFirstName: "Enter Your First Name",
    placeholderLastName: "Enter Your Last Name",
    placeholderEmail: "Example@gmail.com",
    placeholderPassword: "Enter Your Your Password",
    placeholderPasswordConfirm: "Confirm Your Password ",
    rightPassword: true,
    loading: false,
    message: false,
    done: false,
  };

  setFirstname = (firstName) => {
    this.setState({ firstName: firstName });
  };

  setLastname = (lastName) => {
    this.setState({ lastName: lastName });
  };

  setEmail = (email) => {
    this.setState({ email: email });
  };

  setPassword = (password) => {
    this.setState({ password: password });
  };

  checkConfirm = (password) => {
    if (password.length !== 0) {
      this.setState({ rightPassword: password === this.state.password });
    }
  };

  registerHandler = () => {
    this.setState({ loading: true });
    if (this.state.rightPassword) {
      const data = {
        name: this.state.firstName + this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      };

      axios
        .post("/auth", data)
        .then((res) => {
          this.setState({ loading: false });
          store.set("successfulRegister", true);
          this.setState({ done: true });
          this.props.done(this.state.done);
        })
        .catch((error) => {
          this.setState({ loading: false });
          const message = error.response.data.errors.full_messages;
          let keys = Object.keys(message)
            .map((iKeys) => Number(iKeys))
            .map((i) => [...Array(message[i])])
            .reduce((arr, el) => {
              return arr.concat(el);
            })
            .map((mes) => (
              <p
                keys={mes}
                style={{ color: "red", textAlign: "center", marginTop: "3px" }}
              >
                {mes}
              </p>
            ));
          this.setState({ message: keys });
        });
    }
  };

  pressKey = () => {
    this.registerHandler();
  };

  render() {
    return (
      <Aux>
        <KeyboardEventHandler handleKeys={["enter"]} onKeyEvent={this.pressKey}>
          <div className="RegisterForm">
            <h2 className="Title">Register Form</h2>
            {this.state.message}
            <Input
              label="First Name"
              placeholderText={this.state.placeholderFirstName}
              type="text"
              setData={this.setFirstname}
              message={true}
            />
            <Input
              label="Last Name"
              placeholderText={this.state.placeholderLastName}
              type="text"
              setData={this.setLastname}
              message={true}
            />
            <Input
              label="Email"
              placeholderText={this.state.placeholderEmail}
              type="email"
              setData={this.setEmail}
              message={true}
            />
            <Input
              label="Password"
              placeholderText={this.state.placeholderPassword}
              type="password"
              setData={this.setPassword}
              message={true}
            />
            <Input
              label="Confirm Password"
              placeholderText={this.state.placeholderPasswordConfirm}
              type="password"
              setData={this.checkConfirm}
              message={this.state.rightPassword}
            />
            <div className="ButtonGroup">
              <Button
                className="RegisterButton"
                title="Register"
                clicked={this.registerHandler}
              />
              <Button
                className="LoginButton"
                clicked={this.props.clickedLoginButton}
                title="Already have an account?"
              />
            </div>
            {this.state.loading ? (
              <div className="SpinnerContainer">
                <Spinner />
              </div>
            ) : (
              ""
            )}
          </div>
        </KeyboardEventHandler>
      </Aux>
    );
  }
}

export default RegisterForm;