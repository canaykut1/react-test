import React from "react";
import "./Form.css";

import TextBox from "devextreme-react/text-box";

import Chart, { ArgumentAxis, Series, Legend } from "devextreme-react/chart";
import Button from "devextreme-react/button";
import notify from "devextreme/ui/notify";
const data = [
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
  },
];
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "TEXT",
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange (e){
    this.setState({
     text: e.value.toUpperCase()  });

}
  render() {
    return (
      <div>
        <Chart dataSource={data}>
          <ArgumentAxis tickInterval={10} />
          <Series type="bar" />
          <Legend visible={true} />
        </Chart>

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
