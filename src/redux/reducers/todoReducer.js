import {v4 as uuidv4} from 'uuid';
import * as actionTypes from '../actionTypes'
const initTodoList = [{
    id: 1,
    description:"deneme 1 ",
    isCompleted:false 

},
{
    id: 2,
    description:"Deneme 2",
    isCompleted:true 

}]
function todoReducer(state = initTodoList, action) {
    switch (action.type) {
        case actionTypes.TODO_ADDDED:
            return [...state, {
                id: uuidv4(),
                isCompleted: (action.payload.isCompleted)?action.payload.isCompleted:false,
                description: action.payload.description
            }]
        case actionTypes.TODO_REMOVED:
            return state.filter(todo => todo.id !== action.payload.id)
        
        case actionTypes.TODO_COMPLETED:
            return state.map(todo => todo.id === action.payload.id ? {...todo,isCompleted:!todo.isCompleted}:todo) 
        default:
            return state;
    }
}
export default todoReducer;