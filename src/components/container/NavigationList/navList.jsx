import React from "react";
import { Link } from "react-router-dom";
import "./navList.scss";

class NavigationList extends React.PureComponent {
  render() {
    const navigation = [
      { key : 0, id: 0, text: "Main Page", path: ""},
      { id: 1, key : 1,text: "Todo List", path: "todo" },
      { id: 2, key : 2,text: "Charts", path: "chart" },
      { id: 3, key : 3,text: "Counter", path: "counter" },
    ];


    //every repeated must have unique key EVEN LINK
    return (
      <div className='list' style={{ width: "200px" }}>
        <ul>
          {navigation.map((navList) => {
            return (
              <Link to={`/${navList.path}`} style={{ textDecoration: "none" }} key={navList.id}>
                <li className='navList' key={navList.id} >
                  {navList.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavigationList;
