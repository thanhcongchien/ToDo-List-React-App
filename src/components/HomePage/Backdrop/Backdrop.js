import React from 'react';
import './Backdrop.css';
import Aux from '../../../hoc/Axu';

const backDrop = (props) => (
    <Aux>
        {props.show ? <div className="BackDrop" onClick={props.cancel}></div> : null}
    </Aux>
)

export default backDrop;