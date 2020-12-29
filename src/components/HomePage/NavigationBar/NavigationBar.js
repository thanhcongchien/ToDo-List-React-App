import React, { Component } from 'react';
import './NavigationBar.css';
import Aux from '../../../hoc/Axu';
import DropMenu from './DropMenu/DropMenu';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import SayHi from './SayHi/SayHi';
import DrawToggle from './DrawToggle/DrawToggle';


class NavigationBar extends Component {
    
    state = {
        showDropMenu: false
    }
    showDropMenu = () => {
        this.setState({
            showDropMenu: !this.state.showDropMenu
        });
    }
    

    render(){
        return (
          <Aux>
            <div className="NavigationBar">
              <DrawToggle />
              <Logo clickedLogo={this.props.refeshPage}/>
              {/* <Logo
                clickLogo={() => {
                  window.location.href = "/HomePage";
                }}
              ></Logo> */}
              {/* <Search/> */}
              <SayHi clickedDropDown={this.showDropMenu} name="Setting" />
              {this.state.showDropMenu ? (
                <DropMenu
                  clickedSignOutButton={this.props.clickedSignOutButton}
                />
              ) : (
                ""
              )}
            </div>
          </Aux>
        );
    }
}

export default NavigationBar;