import React, { Component } from 'react';
import Background from '../Background/Background';
import Welcome from '../../components/Welcome/Welcome';

class AccountAction extends Component{
    render(){
        return(
            <Background>
                <Welcome/>
            </Background>
        )
    }
}

export default AccountAction;