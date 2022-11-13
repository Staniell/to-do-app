import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';


const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) =>{
     state.todoList.push(action.payload);   
    },
    deleteTodo: (state, action) => {
        const itemId = action.payload;
        state.todoList = state.todoList.filter((item)=>
        item.id !== itemId.id);
    }
  }
});
export const { saveTodo, deleteTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer