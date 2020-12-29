import React from 'react';
import './AddButton.css';
import Aux from '../../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const addButton = (props) => (
    <Aux>
        <div className="AddButton">
            <div className="AddButtonIcon">
                <FontAwesomeIcon icon={faPlus} color="white"/>
            </div>
            <div className="AddButtonInputArea">
                <input type="text" placeholder="Add Project"/>
            </div>
        </div>
    </Aux>
)

export default addButton;