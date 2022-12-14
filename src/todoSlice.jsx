import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import { Instructionsdata } from './InstructionsData';

const initialState = Instructionsdata;

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
    },
    updateTodo: (state, action) => {
        state.todoList.map((task) => {
            if (task.id === action.payload.id) {
              task.name = action.payload.name;
            }
          });
    },
    completeTodo: (state, action) => {
        state.todoList.map((task) => {
            if (task.id === action.payload.id) {
              task.completed = !action.payload.completed;
            }
          });
    }
  }
});
export const { saveTodo, deleteTodo, updateTodo, completeTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer