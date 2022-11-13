import { useState } from "react";
import '../styles/Tasks.css'
import tick from '../images/download.png';

function Tasks(){

    const [show, setShow] = useState(false);
    const [taskID, setTaskID] = useState(-1);
    const [tasks, setTask] = useState([{id:0, Task: "Eat", Status: 'Ongoing'},
                                        {id:1, Task: "Sleep", Status: "Ongoing"},
                                        {id:2, Task: "Play", Status: "Completed"}])

                
    return( 
        <div className="tasks-container">
        {tasks.map((task, index) => <div className='tasks-list'>
            {show & taskID == task.id ? <input type={"text"} className=''></input>  :<h2 className="not-done" onClick={()=>{handleTaskIndex(task.id)}}>
                {index+1}. {task.Task}</h2>}

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

