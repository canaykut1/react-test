import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'



function Counter() {
    const inputBox = useSelector(state=>state.input)
    const dispatch = useDispatch()
  
    return (
        <div>
               
      <p>{inputBox}</p>        
      <button onClick= {()=>dispatch(actions.increase())}>change</button>

        </div>
    )
}

export default Counter