import React from 'react';
import {useDispatch}  from 'react-redux';
import * as actions from '../../../redux/actions';

 function Todo({id,description,isCompleted} ) {
   // console.log(props)
    //const {id,description,isCompleted} = props
    const dispatch = useDispatch();
    const deleteTodo = ()=>
     {
         console.log(id);
        dispatch(actions.todo_removed(id));
    };
    const completedTodo=()=>{
        dispatch(actions.todo_completed(id));

    };
    return (
        <React.Fragment> 
            <span style={(isCompleted)?{color:"blue"}:{color:"red"}}>
                <li>{id}</li>
                <li>{description}</li>
                <button onClick={deleteTodo} style={{background:"red", color:"white" }}>Delete</button>
                <button onClick={completedTodo}>{isCompleted?"Re-Open":"Completed"}</button>

            </span>    
           
        </React.Fragment>
    );
}
// try to use memo if component in some loop .. thats why it will not render again if not change 
export default React.memo(Todo);