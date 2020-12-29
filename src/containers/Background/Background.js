import React, { Component } from 'react';
import './Background.css';
class Background extends Component{
    render(){
        return(
            
            <div className="Background">
                {this.props.children}
            </div>
        )
    }
}

export default Background;