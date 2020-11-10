import Todo from "../../container/Todo/todo";
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {todos_from_API} from '../../../redux/actions';

// import store from "../redux/store";

 function TodoTable(props) {



 
  useEffect(() => {
    // Update the document title using the browser API
        props.todos_from_API();

  },[]);

      //const todoList = useSelector(state=>state.todo);
      console.log(props); 
 
  return (
     
      <ul>
        {props.todo.map(todo=> <Todo key={todo.id} description = {todo.description||todo.title} id={todo.id} isCompleted = {todo.isCompleted || todo.completed}/> )} 
      </ul>

  );
}

// FOR BETTER PERFORMANCE TRY TO BE SPESIFIC WHICH PART OF THE STATE YOU WANT TO LISTEN AND TRIGGER, OTHERWISE IT WILL TRIGGER ALL TIME FOR ANY CHANGE
// second paramater can be own props as  (state,ownprops) for this sample we dont need to use ownProps
const mapStateToProps = (state) =>{
  return {
      //count : state.input,
      todo : state.todo
  };
};




export default connect (mapStateToProps, {todos_from_API})(TodoTable);