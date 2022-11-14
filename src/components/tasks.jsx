import { useState } from "react";
import '../styles/Tasks.css'
import {useSelector} from 'react-redux';
import {selectTodoList} from '../todoSlice';
import CompleteDeleteTask from "./CompleteDeleteTask";
import UpdateTask from "./Update";

function Tasks(){
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState("");
    const [taskID, setTaskID] = useState(-1);
    const tasks = useSelector(selectTodoList);
                
    return( 
        <div className="tasks-container">
        {tasks.map((task, index) => <div className='tasks-list'>
            {show & taskID === task.id ?
            <input className='update-task' value={newTask} 
                onChange={(e)=>{setNewTask(e.target.value)}} type={'text'}></input>  
                :
            <h2 className={task.completed ? "initial-task completed" : "initial-task"} 
                onClick={()=>{handleTaskIndex(task.id, task.name)}}>
                {index+1}. {task.name}</h2>}

            {show & taskID === task.id ? 
                <UpdateTask id={task.id} name={newTask} onShow={() => setShow(!show)}/>
                    :
                <CompleteDeleteTask id={task.id} completed={task.completed}/> 
            }

            </div>)}
        </div>
    );

    function handleTaskIndex(index, name){
        setTaskID(index);
        setShow(!show);
        setNewTask(name);
    }

}


export default Tasks;

