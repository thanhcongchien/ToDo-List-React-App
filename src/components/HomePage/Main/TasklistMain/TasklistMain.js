import React, { useEffect, useState } from 'react';
import './TasklistMain.css';
import Aux from '../../../../hoc/Axu';
import TodoMain from '../TodoMain/TodoMain';
import AddTodoMain from '../AddTodoMain/AddTodoMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faTrashAlt,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from '../../../../axios/axios';
import Spinner from '../../../Welcome/Spinner/Spinner';
import todo from '../../SideBar/Project/Todos/Todo/Todo';

function TaskListMain(props) {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [taskListTemporary, setTaskListTemporary] = useState(props.name);
    const [taskListName, setTaskListName] = useState(props.name);
    const [changeTasklist, setChangeTasklist] = useState(false);
    const [list, setList] = useState([]);
    const [todoAddition, setTodoAddition] = useState("");
    const [email, setEmail] = useState("");
    const [partner, setPartner] = useState(false);
    const [sharePermission, setSharePermission] = useState(false);
    const [partnerId, setPartnerId] = useState("");
    const [user, setUser] = useState([]);

    const changeHandler = (e) => {
        let value = e.target.value;
        setTaskListTemporary(value);
    }


    useEffect(() => {
        async function fetchTodos() { 
            try {
                const request = await axios.request(`/task_lists/${props.id}/todos`);
                setTodos(request.data);
            } catch (error) {
                console.log(error);
            }
         }
        fetchTodos();
    },[loading]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.request('/users');
                setUser(request.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    },[])

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.request('/users');
                const users = request.data;
                users.map(user => {
                    let id = user.id;
                    if(id === props.user_id){
                        setEmail(user.email);
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const submitChangeHandler = ()  => {
        axios.patch(`/task_lists/${props.id}`, {"name":`${taskListTemporary}`})
        .then(res => {
            setChangeTasklist(false);
            setTaskListName(taskListTemporary);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const changeTaskListHandler = () => {
        setChangeTasklist(true);
    }

    const cancelChangeTaskListHandler = (name) => {
        setChangeTasklist(false);
        setTaskListTemporary(taskListName);
    }

    const addTodoHandler = (id) => {
        if(todoAddition === ""){
            return;
        }else{
            setLoading(true);
            axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todoAddition}`}))
            .then(res => {
                setTodoAddition("");
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
      <Aux>
        <div className="TaskListMain">
          <div className="TaskListMainName">
            {changeTasklist ? (
              <input
                type="text"
                style={{ opacity: "1" }}
                value={taskListTemporary}
                onChange={changeHandler}
              />
            ) : (
              <h2 style={{ opacity: "1" }}>
                {taskListName}{" "}
                <span style={{ color: "black", fontSize: "10px" }}>
                  ({todos.length})
                </span>
              </h2>
            )}
            <div className="TaskListMainNameIcon">
              {changeTasklist ? (
                <FontAwesomeIcon 
                className="checkIcon"
                icon={faCheck} onClick={submitChangeHandler} />
              ) : (
                <FontAwesomeIcon
                  className="toolsIcon"
                  icon={faTools}
                  onClick={changeTaskListHandler}
                />
              )}
              {changeTasklist ? (
                <FontAwesomeIcon
                  className="timesIcon"
                  icon={faTimes}
                  onClick={cancelChangeTaskListHandler}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={cancelChangeTaskListHandler}
                  style={{ display: "none" }}
                />
              )}
            </div>
          </div>
          <div className="TodosMain">
            {todos.map((todo) => {
              return (
                <TodoMain
                  check={todo.done}
                  name={todo.name}
                  id={todo.id + todo.name}
                  key={props.id}
                  tasklistId={props.id}
                />
              );
            })}
          </div>
          {props.edit ? (
            <div>
              <div>
                <AddTodoMain
                  setData={setTodoAddition}
                  click={() => addTodoHandler(props.id)}
                  value={todoAddition}
                />
                <div className="DeleteBtn">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    color="red"
                    onClick={props.clickDeleteBtn}
                  />
                </div>
              </div>
              <h6 style={{ opacity: "0" }}>
                You have to permission to edit!!!
              </h6>
            </div>
          ) : (
            <div>
              <div style={{ opacity: "0" }}>
                <AddTodoMain
                  setData={setTodoAddition}
                  click={() => addTodoHandler(props.id)}
                  value={todoAddition}
                />
                <div className="DeleteBtn">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    color="red"
                    onClick={props.clickDeleteBtn}
                  />
                </div>
              </div>
              <h6 style={{ opacity: "1" }}>
                You have to permission to edit!!!
              </h6>
            </div>
          )}
          {props.user_id ? (
            <h6 style={{ textAlign: "center", color: "black" }}>
              Shared by {email}
            </h6>
          ) : null}
          {partner ? (
            <h6 style={{ textAlign: "center", color: "black" }}>
              Sharing with {partner}
            </h6>
          ) : null}
        </div>
      </Aux>
    );
  }

export default TaskListMain;