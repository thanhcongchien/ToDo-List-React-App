import React from 'react';
import './TaskList.css';
import Aux from '../../../../../hoc/Axu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const taskList = (props) => (
    <Aux>
        <div className="TaskList">
            <div className="TaskListHeading">
                <div className="TaskListIcon">
                    <FontAwesomeIcon icon={faCircle} color={props.color}/>
                </div>
                <p className="TaskListLabel">{props.label}</p>
            </div>
            {props.children}
        </div>
    </Aux>
)

export default taskList;