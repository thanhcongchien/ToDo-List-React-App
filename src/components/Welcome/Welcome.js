import React, { Component } from 'react';
import Aux from '../../hoc/Axu';
import './Welcom.css';
import Image from './Image/Image';
import Main from './Main/Main';

class Welcome extends Component {

    state = {
        show: true,
        successfulRegister: false
    }

    showRegisterFormHandler = () => {
        this.setState({
            show: false
        })
    }

    showLoginFormHandler = () => {
        this.setState({
            show: true
        })
    }

    loginStep = (successful) => {
        if(successful){
            this.setState({
                show: true,
                successfulRegister: true
            })
        }
    }

    render() {
        return (
          <Aux>
            <div className="Image">
              <Image />
            </div>
            <div className="Welcome">
              <Main
                show={this.state.show}
                showRegisterForm={this.showRegisterFormHandler}
                showLoginForm={this.showLoginFormHandler}
                successfulRegister={this.loginStep}
                registered={this.state.successfulRegister}
              />
            </div>
          </Aux>
        );
    }
}

export default Welcome;