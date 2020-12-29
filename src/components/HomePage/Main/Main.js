import React, {useEffect, useState} from 'react';
import './Main.css';
import Aux from '../../../hoc/Axu';
import TaskListMain from './TasklistMain/TasklistMain';
import { Row, Col } from 'react-bootstrap';
import axios from '../../../axios/axios';


function Main(props){

    const [taskLists, setTasklist] = useState([props.tasklists]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTasklist(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, [loading]);

    useEffect(() => {
        async function updateData() {
            setTasklist(props.tasklists)
        }
        updateData();
    }, [props.tasklists])

    const deleteTasklistHandler = (id) => {
        setLoading(true);
        axios.delete(`/task_lists/${id}`)
        .then(res => {
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }


    const list = taskLists.map(tasklist => {
        return <Col 
                    lg={3} 
                    key={tasklist.id}>
                        <TaskListMain 
                            name={tasklist.name} 
                            id={tasklist.id} 
                            key={tasklist.id+tasklist.name}
                            clickDeleteBtn={() => deleteTasklistHandler(tasklist.id)}
                            edit={true}/>
                </Col>
    })

    return (
        <Aux>
            <div className="MainDisplay">
                {props.children}
                <div className="TaskListArea">
                    <Row>
                        {list}
                    </Row>
                </div>
            </div>
        </Aux>
    )
}

export default Main;