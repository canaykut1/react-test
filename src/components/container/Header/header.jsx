import React from "react";
import { Button } from "devextreme-react/text-box";
import { Template } from "devextreme-react/core/template";
import Toolbar, { Item } from "devextreme-react/toolbar";
import Logo from "../Logo/logo";
import LanguageList from "../LanguageList/languageList";
import UserPanel from "../UserPanel/userPanel";
import "./header.scss";

function Header() {
  return (
    
    <Toolbar>
      <Item
        widget='dxButton'
        location='before'
        options={{
          type: "back",
          text: "BACK",
          onClick: () => {
            this.props.history.goBack();
          },
        }}
      />
      <Item
        location={"after"}
        locateInMenu={"auto"}
        menuItemTemplate={"userPanelTemplate"}
      >
        <UserPanel menuMode={"context"} />
      </Item>
      <Template name={"userPanelTemplate"}>
        <UserPanel menuMode={"list"} />
      </Template>

      {/* <Item
          widget='dxButton'
          location='before'
          options={{
            text: "EN",
            onClick: () => {
              this.handleChangeLanguage("en");
            },
          }}
        />
        <Item
          widget='dxButton'
          location='before'
          options={{
            text: "TR",
            onClick: () => {
              this.handleChangeLanguage("tr");
            },
          }}
        />
        <Item
          widget='dxButton'
          location='before'
          options={{
            text: "ES",
            onClick: () => {
              this.handleChangeLanguage("es");
            },
          }}
        /> */}

      {/* cssClass={'header-title'} text="ABB" */}
      <Item location='after'>
        <LanguageList />
      </Item>

      <Item location={"before"} render={Logo} />

  
    </Toolbar>
  );
}

export default Header;
