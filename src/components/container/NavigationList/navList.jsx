import React from "react";
import { NavLink } from "react-router-dom";
import "./navList.scss";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class NavigationList extends React.PureComponent {
  render() {
    const { t, i18n } = this.props;

    const navigation = [
      { key: 0, id: 0, text: t("menu_list.main_page"), path: "" },
      { id: 1, key: 1, text: t("menu_list.todo_list"), path: "todo" },
      { id: 2, key: 2, text: t("menu_list.chart"), path: "chart" },
      { id: 3, key: 3, text: t("menu_list.counter"), path: "counter" },

    ];

    //every repeated must have unique key EVEN LINK
    return (
      <div>
        <div className='list'>
          <div className='title'>Main Assets</div>
          {navigation.map((navList) => {
            return (
              <NavLink exact
                to={`/${navList.path}`}
                style={{ textDecoration: "none" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                key={navList.id}
              >
                <div className='flex-container'>
                  <div className='flex-child'>
                    <FontAwesomeIcon icon={faCoffee} />
                  </div>

                  <div className='flex-child'>
                    <div className='navList' key={navList.id}>
                      {navList.text}
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withTranslation()(NavigationList);
