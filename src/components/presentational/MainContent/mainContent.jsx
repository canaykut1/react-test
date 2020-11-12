import React from "react";
import Drawer from "devextreme-react/drawer";
import Toolbar, { Item } from "devextreme-react/toolbar";
import "./mainContent.scss";
import NavigationList from "../../container/NavigationList/navList";
import Form from "../DevExtremeComponents/Form";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Counter, TodoDetail } from "../../container";
import { TodoTable } from "..";
import PropTypes from "prop-types";
import WelcomePage from "../../container/WelcomePage/welcomePage";

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    console.log("mainpageProps",props);
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

    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  onOutsideClick() {
    this.setState({ opened: false });
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    const { opened, openedStateMode, position, revealMode } = this.state;

    return (
      <React.Fragment>
        <Toolbar>
          <Item
            widget='dxButton'
            location='before'
            options={{ type: "back", text: "BACK" ,
          onClick:()=>{this.props.history.goBack();}
          }}
          />

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
            </Switch>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}
// BrowserRouter moved to App component to wrap all app and then we had history in props  with !!! withRouter 

export default withRouter( MainContent);
