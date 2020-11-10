import {v4 as uuidv4} from 'uuid';
import * as actionTypes from '../actionTypes';
import initialStates from './initialStates';

function todoReducer(state = initialStates.todo, action) {
    switch (action.type) {
        case actionTypes.TODO_ADDDED:
            return [...state, {
                id: uuidv4(),
                completed: (action.payload.completed)?action.payload.completed:false,
                title: action.payload.title
            }];
        case actionTypes.TODO_REMOVED:
            return state.filter(todo => todo.id !== action.payload.id);
        
        case actionTypes.TODO_COMPLETED:
            return state.map(todo => todo.id === action.payload.id ? {...todo,completed:!todo.completed}:todo);

            case actionTypes.TODO_FROM_API_SUCCESS:
                return [...state,...action.payload];
        default:
            return state;
    }
}
export default todoReducer;