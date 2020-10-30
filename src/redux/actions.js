import * as actionTypes from     './actionTypes'


export const todo_add= (description,isCompleted)=>{
    return {
        type: actionTypes.TODO_ADDDED,
        payload : {
            description,
            isCompleted
        } 
    }

}

export const todo_removed= id =>{
    return {
        type: actionTypes.TODO_REMOVED,
        payload : {
            id
        } 
    }

}


export const todo_completed= id =>{
    return {
        type: actionTypes.TODO_COMPLETED,
        payload : {
            id
        } 
    }
}

export const increase= () =>{
    return {
        type: actionTypes.INCREASE,
 
    }

}