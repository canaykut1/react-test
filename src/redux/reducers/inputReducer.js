import * as actionTypes from '../actionTypes'


const initInput = '5'
 function inputReducer(state = initInput, action) {
    switch (action.type) {
       case actionTypes.INCREASE:
           return  parseInt(state)+1

        default:
            return state;
    }
}

export default inputReducer;