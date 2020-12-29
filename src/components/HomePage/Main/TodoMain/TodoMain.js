import React, { useEffect, useState } from 'react';
import './TodoMain.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTools, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../axios/axios';


function TodoMain(props, action) {
  const [checked, setChecked] = useState(props.check);
  const [changeTodo, setChangeTodo] = useState(false);
  const [todoName, setTodoName] = useState(props.name);
  const [todoNameTemporary, settodoNameTemporary] = useState(props.name);
  const [del, setDelete] = useState(false);

  useEffect(() => {
    async function updateDone() {
      await axios.patch(`/task_lists/${props.tasklistId}/todos/${props.id}`, {
        done: `${checked}`,
      });
    }
    updateDone();
  }, [checked]);

  const changeTodos = () => {
    setChangeTodo(true);
  };

  const cancelChangeTodos = () => {
    setChangeTodo(false);
    settodoNameTemporary(todoName);
  };

  const submitChangeTodos = () => {
    axios
      .patch(`/task_lists/${props.tasklistId}/todos/${props.id}`, {
        name: `${todoNameTemporary}`,
      })
      .then((res) => {
        setChangeTodo(false);
        setTodoName(todoNameTemporary);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (e) => {
    let value = e.target.value;
    settodoNameTemporary(value);
  };

  const deleteTodos = () => {
    axios
      .delete(`/task_lists/${props.tasklistId}/todos/${props.id}`)
      .then((res) => {
        setDelete(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Aux>
      {del ? (
        ""
      ) : (
        <div className="TodoMain">
          <div className="TodoMainCheckbox">
            {changeTodo ? (
              <input
                className="Task"
                type="text"
                value={todoNameTemporary}
                onChange={changeHandler}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label
                  className="Task"
                  style={{ fontFamily: "inherit", fontWeight: "100" }}
                >
                  {todoName}
                </label>
              </div>
            )}
          </div>
          <div className="TodoMainIcon">
            {changeTodo ? (
              <FontAwesomeIcon
              className="checkIcon"
                icon={faCheck}
                style={{ cursor: "pointer" }}
                onClick={submitChangeTodos}
              />
            ) : (
              <FontAwesomeIcon
                className="editIcon"
                icon={faTools}
                style={{ cursor: "pointer" }}
                onClick={changeTodos}
              />
            )}
            {changeTodo ? (
              <FontAwesomeIcon
              className="timesIcon"
                icon={faTimes}
                data-toggle="tooltip"
                data-placement="top"
                title="Add a Task"
                style={{ cursor: "pointer" }}
                onClick={cancelChangeTodos}
              />
            ) : (
              <FontAwesomeIcon
                className="cancelIcon"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete ToDo List"
                icon={faTrash}
                style={{ cursor: "pointer" }}
                onClick={deleteTodos}
              />
            )}
          </div>
        </div>
      )}
    </Aux>
  );
}


export default TodoMain;