import React from 'react';
import './AddTodoMain.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function AddTodoMain(props) {

    const changeHandler = (e) => {
        let value = e.target.value;
        props.setData(value);
    }
    
    return (
      <Aux>
        <div className="AddTodoMain">
          <input
            type="text"
            data-toggle="tooltip"
            data-placement="top"
            title="add task name and press icon Plus to submit"
            placeholder="Add Task..."
            onChange={changeHandler}
            value={props.value}
          />
           <FontAwesomeIcon
            icon={faPlus}
            onClick={props.click}
            className="AddTodoMainBtn"
          />
        </div>
      </Aux>
    );
}

export default AddTodoMain;