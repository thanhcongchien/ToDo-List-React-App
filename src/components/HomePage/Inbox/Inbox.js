import React, {useEffect, useState} from 'react';
import Aux from '../../../hoc/Axu';
import TaskListMain from '../Main/TasklistMain/TasklistMain';
import { Row, Col } from 'react-bootstrap';
import axios from '../../../axios/axios';


function Inbox(props){
    const [taskLists, setTasklist] = useState([props.tasklists]);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/shared');
                setTasklist(request.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const list = taskLists.map(tasklist => {
        return <Col 
                    lg={3} 
                    key={tasklist.id}>
                        <TaskListMain 
                            name={tasklist.name} 
                            id={tasklist.id} 
                            key={tasklist.id+tasklist.name}
                            edit={tasklist.is_write}
                            user_id={tasklist.user_id}/>
                </Col>
    })

    return (
        <Aux>
            <div className="MainDisplay">
                <div className="TaskListArea">
                    <Row>
                        {list}
                    </Row>
                </div>
            </div>
        </Aux>
    )
}

export default Inbox;