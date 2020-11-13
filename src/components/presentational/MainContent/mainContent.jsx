import React from "react";
import Drawer from "devextreme-react/drawer";
import Toolbar, { Item } from "devextreme-react/toolbar";
import "./mainContent.scss";
import NavigationList from "../../container/NavigationList/navList";
import Form from "../DevExtremeComponents/Form";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Counter, Logo, TodoDetail, WelcomePage } from "../../container";
import { TodoTable } from "..";
import PropTypes from "prop-types";
import NotFound from "../NotFound/notFound";
import {withTranslation } from 'react-i18next';
import LanguageList from "../../container/LanguageList/languageList";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    console.log("mainpageProps", props);
    this.state = {
      opened: false,
      openedStateMode: "overlap",
      revealMode: "slide",
      position: "right",
    };

    this.toolbarItems = [
      {
        widget: "dxButton",
        location: "after",
        options: {
          icon: "menu",
          onClick: () => this.setState({ opened: !this.state.opened }),
        },
      },
    ];
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  onOutsideClick() {
    this.setState({ opened: false });
  }
  handleChangeLanguage(language) {
    this.props.i18n.changeLanguage(language);

  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  render() {
    const { opened, openedStateMode, position, revealMode } = this.state;
    return (
      <React.Fragment>
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

          <Item location={"after"} render={Logo} />
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
          <Item
          location="before"
          >

            <LanguageList/>
            </Item>
          <Item
            widget='dxButton'
            location='after'
            options={{
              icon: "menu",
              onClick: () => this.setState({ opened: !this.state.opened }),
            }}
          />
        </Toolbar>
        <Drawer
          opened={opened}
          openedStateMode={openedStateMode}
          position={position}
          revealMode={revealMode}
          component={NavigationList}
          closeOnOutsideClick={this.onOutsideClick}
          height={800}
        >
          <div id='content' className='dx-theme-background-color'>
            <Switch>
              <Route path='/' exact component={WelcomePage} />
              <Route path='/chart' component={Form} />
              <Route path='/todo' exact component={TodoTable} />
              <Route path='/todo/:id' exact component={TodoDetail} />
              <Route path='/counter' component={Counter} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

// BrowserRouter moved to App component to wrap all app and then we had history in props  with !!! withRouter

export default withTranslation() (withRouter(MainContent));
