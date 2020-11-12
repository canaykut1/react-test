import React, {useState} from 'react';
import * as actions from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import notify from "devextreme/ui/notify";

export default function NewTodo() {    
    //here you can take all states or you can take as special one 
    //const state = useSelector(state=>state)
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    
    const handleInputChange = e =>{
        setInput(e.target.value);        
        // setInput(prev=>({ ...prev,[e.target.name] :e.target.value}));
    };

    const AddTodo = e =>{
        e.preventDefault();
        // console.log(input);
        if(input){
        dispatch(actions.todo_add(input,false));
        setInput("");
        notify("Added Succesfully", "success", 1000);

        }
        else {
            notify("Please Type Something", "error", 1000);
        }
        
        
        
     };
    //  const UpdateInput = e =>{
    //     // store.dispatch(actions.input_changed(e.target.value))
    //     console.log(e.target.value)
    //  }
  
    return (
        <form onSubmit={AddTodo}>
            <label htmlFor="newTodo">New todo</label>
            <input onChange={(e)=>handleInputChange(e)} type="text" name= "newTodo" value = {input}/>
            <input  type="submit" value="Add New Todo "/>
        </form>
    );
}
