import React from 'react'
import '../styles/Tasks.css'
import {useDispatch} from 'react-redux';
import {updateTodo} from '../todoSlice';


export default function UpdateTask({id, name, onShow}) {

  const dispatch = useDispatch();

  return (
    <div style={{margin:"auto",padding:"5px"}}>
      <button className="button delete cancel" onClick={onShow}>CANCEL</button>
      <button className="button done update" onClick={()=>{updateTask()}}>UPDATE</button>
    </div>
  )

  function updateTask(){
    dispatch(updateTodo({
        id:id,
        name:name,
        completed:false
    }))
    onShow();
}


}
