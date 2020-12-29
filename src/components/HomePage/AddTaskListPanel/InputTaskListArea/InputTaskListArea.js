import React from 'react';
import './InputTaskListArea.css';
import Aux from '../../../../hoc/Axu';

function InputTaskListArea (props) {
    const changeHandler = (e) => {
        let value = e.target.value;
        props.setData(value);
    }
    return (
        <Aux>
            <div className="InputTaskListArea">
                <label>{props.name}</label>
                <input type="text" onChange={changeHandler}/>
            </div>
        </Aux>
    )

}



export default InputTaskListArea;