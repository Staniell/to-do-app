import React from 'react'
import {deleteTodo, completeTodo} from '../todoSlice';
import {useDispatch} from 'react-redux';
import '../styles/Tasks.css'

export default function CompleteDeleteTask({id, completed}) {
    const dispatch = useDispatch();

    return (
        <div style={{margin:"auto",padding:"5px"}}>
            <button className="button delete" onClick={()=>{deleteTask()}}>DELETE</button>
            <button className="button done" onClick={()=>{completeTask()}}>COMPLETE</button>
        </div>
    )

    function completeTask(){
        dispatch(completeTodo({
            id:id,
            completed:completed
        }))
    }

    function deleteTask(){
        dispatch(deleteTodo({
            id: id
        }))
    }
}
