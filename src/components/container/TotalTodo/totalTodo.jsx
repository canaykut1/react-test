import React from 'react';
import "./totalTodo.scss";
function TotalTodo({sums}) {
   // const {sum} = props;
    console.log(sums);
    return (

        <div className = "sum">
        <p>TOTAL TODO : {sums.totalSum}</p> 
        <p>COMPLETED TODO : {sums.completedSum}</p> 
        <p>OPEN TODO : {sums.openSum}</p> 

        </div>
    );
}


export default TotalTodo;
