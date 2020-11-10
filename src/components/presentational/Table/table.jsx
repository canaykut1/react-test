import Todo from "../../container/Todo/todo";
import {connect} from 'react-redux';
import React from 'react';

// import store from "../redux/store";

 function TodoTable(props) {



      //const todoList = useSelector(state=>state.todo);
      console.log(props); 
 
  return (
     
      <ul>
        {props.todo.map(todo=> <Todo key={todo.id} description = {todo.description} id={todo.id} isCompleted = {todo.isCompleted}/> )} 
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

// if you dont use mapDispatchToProps it will automatically inject all 


export default connect (mapStateToProps)(TodoTable);