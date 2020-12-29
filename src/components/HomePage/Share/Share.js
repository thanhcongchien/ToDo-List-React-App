import React, {useState} from 'react';
import Aux from '../../../hoc/Axu';
import TaskList from './Tasklist/Tasklist';



function Share(props){
    const [taskLists, setTasklist] = useState([props.tasklists]);

    const list = taskLists.reduce(taskList => {
        return taskList;
    })
    
    const lists = list.map(list => {
        return <div
                    key={list.id}>
                        <TaskList
                            name={list.name}
                            id={list.id}
                            key={list.id+list.name}/>
                </div>
    })

    return (
        <Aux>
            <div className="MainDisplay">
                <div className="TaskListArea">
                        {lists}
                </div>
            </div>
        </Aux>
    )
}

export default Share;