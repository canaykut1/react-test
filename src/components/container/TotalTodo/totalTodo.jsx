import React from 'react';
import "./totalTodo.scss";
import PieChart, {
    Legend,
    Series,
    Tooltip,
    Format,
    Label,
    Export
  } from 'devextreme-react/pie-chart';

function TotalTodo({sums}) {
   // const {sum} = props;
    return (


        <PieChart
        id="pie"
        type="doughnut"
        title="Todo Status"
        palette="Soft Pastel"
        dataSource={sums}
      >
        <Series argumentField="type">
          <Label visible={true} >
          </Label>
        </Series>
        {/* <Export enabled={true} /> */}
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
        {/* <Tooltip enabled={true} >
          <Format type="millions" />
        </Tooltip> */}
      </PieChart>
    );
}



export default TotalTodo;
