import React from 'react';
import Aux from '../../../../../hoc/Axu';
import './Button.css';

const button = (props) => (
    <Aux>
        <button className={props.className} onClick={props.clicked} disabled={props.disabled}>{props.title}</button>
    </Aux>
)

export default button;