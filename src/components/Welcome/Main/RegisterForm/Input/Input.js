import React, { Component } from 'react';
import './Input.css';
import Aux from '../../../../../hoc/Axu';

class Input extends Component{
    changeHandler = (e) => {
        let value = e.target.value;
        this.props.setData(value);
    }

    render(){
        return (
          <Aux>
            <div className="Input">
              <div className="Block">
                <label>{this.props.label}</label>
                {this.props.message ? (
                  <p></p>
                ) : (
                  <p style={{ color: "red" }}>Password are not matching.</p>
                )}
                <input
                  type={this.props.type}
                  onChange={this.changeHandler}
                  placeholder={this.props.placeholderText}
                />
              </div>
            </div>
          </Aux>
        );
    }
}

export default Input;