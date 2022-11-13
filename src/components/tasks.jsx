import { useState } from "react";
import '../styles/Tasks.css'
import tick from '../images/download.png';

import {useSelector} from 'react-redux';
import {selectTodoList} from '../todoSlice';

import {useDispatch} from 'react-redux';
import {deleteTodo} from '../todoSlice';
import {updateTodo} from '../todoSlice';

function Tasks(){
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState("");
    const [taskID, setTaskID] = useState(-1);
    const tasks = useSelector(selectTodoList);
                
    return( 
        <div className="tasks-container">
        {tasks.map((task, index) => <div className='tasks-list'>
            {show & taskID === task.id ?           <input className='update-task' value={newTask} 
            onChange={(e)=>{setNewTask(e.target.value)}} type={'text'}></input>  
            :
            <h2 className={task.done ? "initial-task completed" : "initial-task"} 
            onClick={()=>{handleTaskIndex(task.id, task.name)}}>
                {index+1}. {task.name}</h2>}

            {show & taskID === task.id ? 
                <div style={{margin:"auto",padding:"5px"}}>
                    <button className="button delete" onClick={()=>{setShow(false)}}>CANCEL</button>
                    <button className="button done" onClick={()=>{completeTask(task.id, newTask)}}>UPDATE</button>
                </div>
                    :
                <div style={{margin:"auto",padding:"5px"}}>
                    <button className="button delete" onClick={()=>{deleteTask(task.id)}}>DELETE</button>
                    <button className="button done">COMPLETE</button>
                </div>
            }

            </div>)}
        </div>
    );

    function handleTaskIndex(index, name){
        setTaskID(index);
        setShow(!show);
        setNewTask(name);
    }

    function completeTask(id,name){
        dispatch(updateTodo({
            id:id,
            name:name,
            completed:false
        }))
        setShow(!show);
    }

    function deleteTask(id){
        dispatch(deleteTodo({
            id: id
        }))
    }
}


export default Tasks;

