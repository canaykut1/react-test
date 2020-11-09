import React, {useState} from "react";
import "./Form.css";
import {produce} from 'immer';
import TextBox from "devextreme-react/text-box";

import Chart, { ArgumentAxis, Series, Legend } from "devextreme-react/chart";
import Button from "devextreme-react/button";
import notify from "devextreme/ui/notify";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data :  [
            {
              arg: 1990,
              val: 5320816667,
            },
            {
              arg: 2000,
              val: 6127700428,
            },
            {
              arg: 2010,
              val: 6916183482,
            }
          ],
      text: "TEXT"
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange (e){
    this.setState({
     text: e.value.toUpperCase()  });
}
handleButtonClick = ()=>{
    this.setState( produce(draft => {
        draft.data.push({
            arg: 2020,
            val: 16916183482,
          });
    }));
}
  render() {
    return (
      <div>
        <Chart dataSource={this.state.data}>
          <ArgumentAxis tickInterval={10} />
          <Series type="bar" />
          <Legend visible={true} />
        </Chart>
        <hr/>
        <div className={"sameline"}>Button to add 2020 population </div>
        <Button className={"sameline"} onClick={this.handleButtonClick}>
          Click me
        </Button>
        <hr />

        <div className={"sameline"}>Button is available</div>
        <Button className={"sameline"} onClick={this.sayHelloWorld}>
          Click me
        </Button>

        <div>
                <TextBox
                width = {200}
                    value={null}
                    onValueChanged={this.handleValueChange}
                    valueChangeEvent="input"

                />
                <br />
                <div>{this.state.text}</div>
            </div>
      </div>
    );
  }

  sayHelloWorld =()=> {
    notify(this.state.text, "success", 1000);
    console.log(this.state.text);
  }
}

export default Form;
