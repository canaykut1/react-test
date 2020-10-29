import React from "react";
import Todo from "./todo";
import { useSelector } from 'react-redux'

// import store from "../redux/store";

export default function TodoTable() {
  const todoList = useSelector(state=>state.todo)
      console.log(todoList)   
        

  return (
      <ul>
        {todoList.map(todo=> <Todo key={todo.id} description = {todo.description} id={todo.id} isCompleted = {todo.isCompleted}/> )} 
      </ul>
  );
}
