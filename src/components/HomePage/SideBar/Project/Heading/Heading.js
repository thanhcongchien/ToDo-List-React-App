import React from 'react';
import './Heading.css';
import Aux from '../../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const heading = (props) => (
    <Aux>
        <div className="Heading">
            <div className="IconHeading">
                <FontAwesomeIcon icon={faAngleDown} color="white"/>
            </div>
            <p className="LabelHeading">Project</p>
            <div className="SmallAddButton">
                <FontAwesomeIcon icon={faPlus} color="white"/>
            </div>
        </div>
    </Aux>
)

export default heading;