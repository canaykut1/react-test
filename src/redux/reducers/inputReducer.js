import * as actionTypes from '../actionTypes'


const initInput = "5"
 function inputReducer(state = initInput, action) {
    switch (action.type) {
       case actionTypes.NEW_TODO_INPUT:
           return  action.payload.description

        default:
            return state;
    }
}

export default inputReducer;