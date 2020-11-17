import React from "react";
import Drawer from "devextreme-react/drawer";
import "./mainContent.scss";
import NavigationList from "../../container/NavigationList/navList";
import Form from "../DevExtremeComponents/Form";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Counter, Logo, TodoDetail, WelcomePage } from "../../container";
import { TodoTable } from "..";
import PropTypes from "prop-types";
import NotFound from "../NotFound/notFound";
import { withTranslation } from "react-i18next";
import Header from "../../container/Header/header";
import TreeView from 'devextreme-react/tree-view';
import { Template } from 'devextreme-react/core/template';
import NavSideBar from "../../container/NavSideBar/navSideBar";




class MainContent extends React.Component {
   
  constructor(props) {
    super(props);
    console.log("mainpageProps", props);
    
    // this.toolbarItems = [
    //   {
    //     widget: "dxButton",
    //     location: "after",
    //     options: {
    //       icon: "menu",
    //       onClick: () => this.setState({ opened: !this.state.opened }),
    //     },
    //   },
    // ];
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
    return (
      <React.Fragment>
       <Header/>

        <div className="container">
             <div className="left-content">
              <NavSideBar/>
          </div>
          <div className='right-content'>
            <Switch>
              <Route path='/' exact component={WelcomePage} />
              <Route path='/chart' component={Form} />
              <Route path='/todo' exact component={TodoTable} />
              <Route path='/todo/:id' exact component={TodoDetail} />
              <Route path='/counter' component={Counter} />
              <Route component={NotFound} />
            </Switch>

          </div>
          </div>

        
      </React.Fragment>
    );
  }
}

// BrowserRouter moved to App component to wrap all app and then we had history in props  with !!! withRouter

export default withTranslation()(withRouter(MainContent));
