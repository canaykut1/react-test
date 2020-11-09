import {combineReducers} from 'redux';
import todoReducer from  './todoReducer';
import inputReducer from './inputReducer';

 export const rootReducer = combineReducers (
    {
        todo:todoReducer,
        input: inputReducer

    }
);
