import TodoTable from './components/table'
import './App.css';
import NewTodo from './components/newTodo'
import axios from 'axios';
import {useEffect} from 'react';
import * as actions from   './redux/actions'
import {useDispatch} from 'react-redux'
import Counter from './components/counter'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // Update the document title using the browser API
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res)=>{
          const  list= res.data;
          list.forEach((todo)=>{
            dispatch(actions.todo_add(todo.title,todo.completed))
          })
          console.log(list)
        })
 
  });
  return (
        
        <div>
          <Counter/>
          <NewTodo/>
          <TodoTable/>
        </div>
    

    );
}

export default App;
