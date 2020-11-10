import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import * as actions from "./redux/actions";
import { useDispatch } from "react-redux";
import { Counter, NewTodo } from "./components/container";
import { TodoTable, Form } from "./components/presentational";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

function App() {
  
 
  return (
    <div>
      <Form />
      <Counter />
      <NewTodo />
      <TodoTable />
    </div>
  );
}

export default App;
