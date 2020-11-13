import React from "react";
import Drawer from "devextreme-react/drawer";
import Toolbar, { Item } from "devextreme-react/toolbar";
import "./mainContent.scss";
import NavigationList from "../../container/NavigationList/navList";
import Form from "../DevExtremeComponents/Form";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Counter, TodoDetail,WelcomePage } from "../../container";
import { TodoTable } from "..";
import PropTypes from "prop-types";
import Logo from "../../../img/abb-logo.png";
import NotFound from "../NotFound/notFound";

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

    this.logoRenderer= this.logoRenderer.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  onOutsideClick() {
    this.setState({ opened: false });
  }
  logoRenderer () {

    return (<img className="logo" src={Logo}/>);

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

   
           <Item location={'after'} render={this.logoRenderer}  />     
         {/* cssClass={'header-title'} text="ABB" */}
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

export default withRouter(MainContent);
