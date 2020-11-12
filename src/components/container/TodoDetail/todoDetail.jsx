import React, { useEffect, useState } from "react";

import axios from "axios";

function TodoDetail({match,history}) {
    // instead of match you can use useParams from react-dom router
  const [todo, settodo] = useState({});
  console.log(todo);
  useEffect(() => {
    todoDetailsApi();
     // eslint-disable-next-line
  }, []);
  const todoDetailsApi = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${match.params.id}`
    );
    settodo(response.data);
  };
  return (
    <div>
      <h1>{todo.id}</h1>
      <h1>{todo.title}</h1>
      <h1>{todo.completed?todo.completed.toString():null}</h1>
      <button onClick={()=>{history.goBack();}}>GO BACK </button>
    </div>
  );
}

export default TodoDetail;
