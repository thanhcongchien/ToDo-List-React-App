import React from 'react';
import './SayHi.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const sayHi = (props) => (
    <Aux>
        <div className="Sayhi">
            <p>{props.name}</p>
            <div className="DropDown" onClick={props.clickedDropDown}>
                <FontAwesomeIcon icon={faAngleDown} color="black"/>
            </div>
        </div>
    </Aux>
)

export default sayHi;