import Todo from "../../container/Todo/todo";
import { connect } from "react-redux";
import React, { Fragment, useEffect, useState} from "react";
import TotalTodo from "../../container/TotalTodo/totalTodo";
import { NewTodo } from "../../container";

// import store from "../redux/store";

function TodoTable({todos_from_API,todo}) {


  const [sums,setSums] = useState({});
   console.log(sums);

  //const todoList = useSelector(state=>state.todo);
  const calculateSums = (todo)=>{
    const totalSum = todo.length;
    let completedSum = todo.filter(element =>  (element.completed === true)).length;
    let openSum = todo.filter(element =>  (element.completed === false)).length;

    setSums({"totalSum":totalSum,"completedSum":completedSum,"openSum":openSum});


  };
  useEffect(() => {
    // Update the document title using the browser API
    calculateSums(todo);
  },[todo]);

  return (
    <Fragment>
      <TotalTodo sums = {sums} />
      <NewTodo/>
      <ul>
        {todo.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title }
            id={todo.id}
            completed={todo.completed }
          />
        ))}
      </ul>
    </Fragment>
  );
}

// FOR BETTER PERFORMANCE TRY TO BE SPESIFIC WHICH PART OF THE STATE YOU WANT TO LISTEN AND TRIGGER, OTHERWISE IT WILL TRIGGER ALL TIME FOR ANY CHANGE
// second paramater can be own props as  (state,ownprops) for this sample we dont need to use ownProps
const mapStateToProps = (state) => {
  return {
    //count : state.input,
    todo: state.todo,
  };
};


export default connect(mapStateToProps)(TodoTable);
