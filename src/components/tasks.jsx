import { useState } from "react";
import '../styles/Tasks.css'
import tick from '../images/download.png';

import {useSelector} from 'react-redux';
import {selectTodoList} from '../todoSlice';

function Tasks(){

    const [show, setShow] = useState(false);
    const [taskID, setTaskID] = useState(-1);
    const tasks = useSelector(selectTodoList);
                
    return( 
        <div className="tasks-container">
        {tasks.map((task, index) => <div className='tasks-list'>
            {show & taskID == task.id ? <input type={"text"}></input>  :<h2 className={task.done ? "initial-task completed" : "initial-task"} onClick={()=>{handleTaskIndex(task.id)}}>
                {index+1}. {task.name}</h2>}

            {show & taskID == task.id ? 
                <div style={{margin:"auto",padding:"5px"}}>
                    <button className="button delete" onClick={()=>{setShow(false)}}>CANCEL</button>
                    <button className="button done">UPDATE</button>
                </div>
                    :
                <div style={{margin:"auto",padding:"5px"}}>
                    <button className="button delete">DELETE</button>
                    <button className="button done">COMPLETE</button>
                </div>
            }

            </div>)}
        </div>
    );

    function handleTaskIndex(index){
        setTaskID(index);
        setShow(!show);
    }
}


export default Tasks;

