
import './App.css';
import axios from 'axios';
import React, {useEffect} from 'react';
import * as actions from   './redux/actions';
import {useDispatch} from 'react-redux';
import {Counter,NewTodo} from './components/container';
import {TodoTable,Form} from './components/presentational';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Update the document title using the browser API
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res)=>{
          const  list= res.data;
          list.forEach((todo)=>{
            dispatch(actions.todo_add(todo.title,todo.completed));
          });
          console.log(list);
        });
 
  });
  return (
        
        <div>
          <Form/>
          <Counter/>
          <NewTodo/>
          <TodoTable/>
        </div>
    

    );
}

export default App;
