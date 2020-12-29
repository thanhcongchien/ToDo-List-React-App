import React from 'react';
import './DropMenuItem.css';
import Aux from '../../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const dropMenuItem = (props) => (
    <Aux>
        <div className="DropMenuItem" onClick={props.clicked}>
            <FontAwesomeIcon icon={props.icon}/>
<           p>{props.label}</p>
        </div>
    </Aux>
)

export default dropMenuItem;