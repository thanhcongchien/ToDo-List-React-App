import React from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faPaperPlane, faInbox, faStar,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
    let op1 = true;
    let op2 = false;
    let op3 = false;
     let op4 = false;

    if(props.controller === 0){
        op1 = true;
        op2 = false;
        op3 = false;
         op4 = false;
    }else if(props.controller === 1){
        op1 = false;
        op2 = true;
        op3 = false;
         op4 = false;
    }else if(props.controller === 2){
        op1 = false;
        op2 = false;
        op3 = true;
        op4 = false;
    }else{
        op1 = false;
        op2 = false;
        op3 = false;
        op4 = true;
    }

    return (
      <Aux>
        <div className="SideBar">
          {op1 ? (
            <Item
              icon={faCheckCircle}
              label="Todo"
              number={props.tasklists}
              color="#000000"
              click={props.clickTodo}
            />
          ) : (
            <Item
              icon={faCheckCircle}
              label="Todo"
              number={props.tasklists}
              color="white"
              click={props.clickTodo}
            />
          )}
          {op2 ? (
            <Item
              icon={faInbox}
              label="Inbox"
              number={props.shared}
              color="#000000"
              click={props.clickInBox}
            />
          ) : (
            <Item
              icon={faInbox}
              label="Inbox"
              number={props.shared}
              color="white"
              click={props.clickInBox}
            />
          )}
          {op3 ? (
            <Item
              icon={faPaperPlane}
              label="Share"
              number={props.share}
              color="#000000"
              click={props.clickShare}
            />
          ) : (
            <Item
              icon={faPaperPlane}
              label="Share"
              number={props.share}
              color="white"
              click={props.clickShare}
            />
          )}
          {/* {op4 ? (
            <Item
              icon={faStar}
              label="Share"
              number={props.add}
              color="#000000"
              click={props.clickAdd}
            />
          ) : (
            <Item
              icon={faStar}
              label="Add"
              number={props.add}
              color="white"
              click={props.clickAdd}
            />
          )} */}
        </div>
      </Aux>
    );
}

export default SideBar;