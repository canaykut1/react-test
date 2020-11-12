import { DefaultItemProperties } from "devextreme-react/diagram";
import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { Link } from "react-router-dom";

function Todo({ id, title, completed }) {
  // console.log(props)
  //const {id,title,completed} = props
  const dispatch = useDispatch();
  const deleteTodo = () => {
    console.log(id);
    dispatch(actions.todo_removed(id));
  };
  const completedTodo = () => {
    dispatch(actions.todo_completed(id));
  };
  return (
    <React.Fragment>
      <span style={completed ? { color: "blue" } : { color: "red" }}>
        <li>{id}</li>
        <li>{title}</li>
        <button
          onClick={deleteTodo}
          style={{ background: "red", color: "white" }}
        >
          Delete
        </button>
        <button onClick={completedTodo}>
          {completed ? "Re-Open" : "Completed"}
        </button>
        <Link to={`/todo/${id}`}>
          <button>Details</button>
        </Link>
      </span>
    </React.Fragment>
  );
}
// try to use memo if component in some loop .. thats why it will not render again if not change
export default React.memo(Todo);
