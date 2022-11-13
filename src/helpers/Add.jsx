import '../styles/Add.css'
import { useState } from 'react';

// import useDispatch from 'react-redux';
// import saveTodo from '../todoSlice';

function Add(){
    const [taskName, setTaskName] = useState("");
    // const dispatch = useDispatch();

    function addTask(taskName){
        // dispatch(saveTodo({
        //     item: input,
        //     done: false,
        //     id: Date.now()
        // }))
    }

    return(
        <div className="add-task-container">
            <input className='input-task' value={taskName}
             onChange={(e)=>{setTaskName(e.target.value)}} type={'text'}></input>
            <button onClick={()=>{addTask(taskName)}} className='button'>Add Task</button>
        </div>
    );

}

export default Add;