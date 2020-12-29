import React, {useEffect, useState} from 'react';
import Aux from '../../../../hoc/Axu';
import axios from '../../../../axios/axios';
import Row from './Row/Row';

function Tasklist(props) {

    const [user, setUser] = useState({});
    const [share, setShare] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.request(`/task_lists/${props.id}/share`);
                setShare(request.data);
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
                const usersList = request.data;
                const list = usersList.map(user => {
                    let id = user.id;
                    let email = user.email;
                    const ob = {id: email};
                    renameKey(ob, "id", id);
                    return ob;
                });
                const users = list.reduce((ob, el) => {
                    return {...ob, ...el}
                });
                setUser(users);
            } catch (error) {
                console.log(error); 
            }
        }
        fetchData();
    },[])

    const renameKey = (obj, old_key, new_key) => {    
        // check if old key = new key   
            if (old_key !== new_key) {                   
               Object.defineProperty(obj, new_key, // modify old key 
                                    // fetch description from object 
               Object.getOwnPropertyDescriptor(obj, old_key)); 
               delete obj[old_key];                // delete old key 
               } 
        }

        const row = share.map(s => {
            return <Row
                        key={s.user_id}
                        user={user}
                        id={s.user_id}
                        taskListId={s.task_list_id}
                        is_write={s.is_write}
                        name={props.name}
                        user_id={s.user_id}/>
        }) 

    return (
        <Aux>
            <div style={{marginBottom:"15px", padding:"10px", display:'flex', overflow:"scroll", maxWidth:"1200px"}}> 
                {row}
            </div>
        </Aux>
    )
}

export default Tasklist;
