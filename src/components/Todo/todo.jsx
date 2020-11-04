import React from 'react';
import {useDispatch}  from 'react-redux'
import * as actions from '../../redux/actions'

export default function Todo({id,description,isCompleted} ) {
   // console.log(props)
    //const {id,description,isCompleted} = props
    const dispatch = useDispatch()
    const deleteTodo = ()=>
     {
         console.log(id)
        dispatch(actions.todo_removed(id))
    }
    const completedTodo=()=>{
        dispatch(actions.todo_completed(id))

    }
    return (
        <React.Fragment> 
            <span style={(isCompleted)?{color:"blue"}:{color:"red"}}>
                <li>{id}</li>
                <li>{description}</li>
                <button onClick={deleteTodo}>Delete</button>
                <button onClick={completedTodo}>{isCompleted?"Re-Open":"Completed"}</button>

            </span>    
           
        </React.Fragment>
    )
}
