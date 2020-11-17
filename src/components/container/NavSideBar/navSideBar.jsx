import React, { useState } from "react";
import TreeView from "devextreme-react/tree-view";
import { Template } from "devextreme-react/core/template";
import Drawer from "devextreme-react/drawer";
import "./navSideBar.scss";
import NavigationList from "../NavigationList/navList";

function NavSideBar() {
  const initNavbar = [
    {
      text: "Main Assets",
      path: "/home",
    },
    {
      text: "Examples",
      icon: "folder",

      items: [
        {
          text: "Profile",
          path: "/profile",
          icon: "home",
        },
        {
          text: "Tasks",
          path: "/tasks",
        },
      ],
    },
  ];
  const [navigation, setNavigation] = useState(initNavbar);
  return (
 <NavigationList/>
  );
}

export default NavSideBar;
   
   
   /*<Template name={"menu"}>
        <div className={"dx-swatch-additional side-navigation-menu"}>
          <div className={"menu-container"}>
            <TreeView
              dataSource={navigation}
              selectionMode='single'
              selectByClick={true}
            />
          </div>
        </div>
      </Template>

      <Drawer
      opened={true}
      openedStateMode={"shrink"}
      position={"left"}
      revealMode={"slide"}
      //template={"menu"}
      component={NavigationList}
    >
   
    </Drawer>*/