import React from "react";
import { Link } from "react-router-dom";
import "./navList.scss";
import {withTranslation } from 'react-i18next';

class NavigationList extends React.PureComponent {
  render() {   
    const {t,i18n}=this.props;

    const navigation = [
      { key : 0, id: 0, text: t("menu_list.main_page"), path: ""},
      { id: 1, key : 1,text: t("menu_list.todo_list") , path: "todo" },
      { id: 2, key : 2,text:  t("menu_list.chart"), path: "chart" },
      { id: 3, key : 3,text:  t("menu_list.counter"), path: "counter" },
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

export default withTranslation() (NavigationList);
