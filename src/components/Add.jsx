import '../styles/Add.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {saveTodo} from '../todoSlice';

function Add(){
    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();

    function addTask(){

        dispatch(saveTodo({
            name: taskName,
            completed: false,
            id: Date.now()
        }))
        setTaskName("");
    }

    return(
        <div className="add-task-container">
            <input className='input-task' value={taskName}
             onChange={(e)=>{setTaskName(e.target.value)}} placeholder="Enter a task..." type={'text'}></input>
            <button onClick={()=>{addTask()}} className='button'>Add Task</button>
        </div>
    );

}

export default Add;