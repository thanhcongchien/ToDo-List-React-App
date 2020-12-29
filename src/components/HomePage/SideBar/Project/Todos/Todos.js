import React from 'react';
import './Todos.css';
import Aux from '../../../../../hoc/Axu';

const todos = (props) => (
    <Aux>
        <div className="Todos">
            {props.children}
        </div>
    </Aux>
)

export default todos;