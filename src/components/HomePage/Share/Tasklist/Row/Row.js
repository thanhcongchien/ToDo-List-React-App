import React, { useEffect } from 'react';
import TodoMain from '../../../Main/TodoMain/TodoMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from '../../../../../axios/axios';

function Row(props) {

    const [write, setWrite] = useState(props.is_write);
    const [dele, setDelete] = useState(false);
    const [todos, setTodos] = useState([]);
    const user = props.user;

    useEffect(() => {
        async function putData() {
            try {
                await axios.put(`/task_lists/${props.taskListId}/share/${props.user_id}`, {"share_task":{'is_write': `${write}`}});
            } catch (error) {
                console.log(error);
            }
        }
        putData();
    },[write])

    useEffect(() => {
        async function fetchTodos() { 
            try {
                const request = await axios.request(`/task_lists/${props.taskListId}/todos`);
                setTodos(request.data);
            } catch (error) {
                console.log(error);
            }
         }
        fetchTodos();
    },[props.taskListId]);

    const deleteShare = () => {
        try {
            axios.delete(`task_lists/${props.taskListId}/share/${props.user_id}`);
            setDelete(true);
        } catch (error) {
            console.log(error);
        }
    }

    let task = (<div className="TaskListMain" style={{width:"250px", margin:"10px"}}>
    <div className="TaskListMainName">
        <h2>{props.name}  <span style={{color:"black", fontSize:"10px"}}>({todos.length})</span></h2>
    </div>
    <div className="TodosMain">
        {
            todos.map(todo => {
                return <TodoMain 
                        check={todo.done}
                        name={todo.name}
                        id={todo.id}
                        key={props.id}
                        tasklistId={props.id}/>
            })
        }
    </div>
    <span style={{color:"red", marginBottom:"20px"}}>{user[props.id]}</span>
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", width:"150px"}}>
            <input 
                type="checkbox"
                checked={write}
                onChange={() => setWrite(!write)}/>
            <label style={{fontFamily: "inherit", fontWeight:"100"}}>Edit Permission</label>
    </div>
    <div className="DeleteBtn">
            <FontAwesomeIcon 
                icon={faTrashAlt} 
                color="red" 
                onClick={deleteShare}/>
    </div>
</div>);
    return (
        dele ? null: task
    )
}
export default Row;