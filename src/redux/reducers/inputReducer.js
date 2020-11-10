import * as actionTypes from '../actionTypes';
import inintialStates from './initialStates';


 function inputReducer(state = inintialStates.initInput, action) {
    switch (action.type) {
       case actionTypes.INCREASE:
           return  parseInt(state)+1;

        default:
            return state;
    }
}

export default inputReducer;