import React from 'react';
import './DrawToggle.css';
import Aux from '../../../../hoc/Axu';

const drawToggle = (props) => (
    <Aux>
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Aux>
)

export default drawToggle;