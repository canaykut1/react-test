import React from 'react';
import { useSelector,connect,useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';
import PropTypes from 'prop-types';



function Counter(props) {
    //useSelector replaced with connect
    //const inputBox = useSelector(state=>state.input);
    const dispatch = useDispatch();
    return (
        <div >
          
      <h2> {props.count}</h2>

      <button onClick= {()=>dispatch(actions.increase())}>change</button>

        </div>
    );
}

Counter.propTypes = {
dispatch: PropTypes.func.isRequired
};

// FOR BETTER PERFORMANCE TRY TO BE SPESIFIC WHICH PART OF THE STATE YOU WANT TO LISTEN AND TRIGGER, OTHERWISE IT WILL TRIGGER ALL TIME FOR ANY CHANGE
// second paramater can be own props as  (state,ownprops) for this sample we dont need to use ownProps
const mapStateToProps = (state) =>{
    return {
        count : state.input,
        //todo : state.todo
    };
};

// if you dont use mapDispatchToProps it will automatically inject all 

export default connect (mapStateToProps) (Counter);