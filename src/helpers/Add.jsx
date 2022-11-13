import '../styles/Add.css'

function Add(){
    return(
        <div className="add-task-container">
            <input className='input-task' type={'text'}></input>
            <button className='button'>Add Task</button>
        </div>
    );
}

export default Add;