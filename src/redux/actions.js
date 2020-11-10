import axios from 'axios';
import * as actionTypes from     './actionTypes';


export const todo_add= (description,isCompleted)=>{
    return {
        type: actionTypes.TODO_ADDDED,
        payload : {
            description,
            isCompleted
        } 
    };

};

export const loadTodosSuccess =todos =>{
return {
type : actionTypes.TODO_FROM_API_SUCCESS,
payload : todos
};
};

export const todos_from_API = () =>dispatch =>{
axios  
    .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((res) => {
        console.log(res.data);
        dispatch(loadTodosSuccess(res.data));
      })
    .catch(err=>{
        console.log(err);
    });
};

export const todo_removed= id =>{
    return {
        type: actionTypes.TODO_REMOVED,
        payload : {
            id
        } 
    };

};


export const todo_completed= id =>{
    return {
        type: actionTypes.TODO_COMPLETED,
        payload : {
            id
        } 
    };
};

export const increase= () =>{
    return {
        type: actionTypes.INCREASE,
 
    };

};