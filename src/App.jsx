import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Private from './Pages/Private.jsx';
import Profile from './Pages/Profile.jsx';
import Info from './Pages/Info.jsx';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: 0,
    };
    this.setNavState = this.setNavState.bind( this );
  }

  setNavState( event, value ) {
    this.setState( {
      value,
    } );
  }


  render() {
    const { value } = this.state;
    return (
      <div>
        <NavBar
          value={value}
          setNavState={this.setNavState}
        />
        <Switch>
          <Route
            path="/home"
            exact
            render={props => (
              <Home setNavState={this.setNavState} {...props} />
            )}
          />
          <Route
            path="/profile"
            exact
            render={props => (
              <Profile setNavState={this.setNavState} {...props} />
            )}
          />
          <Route
            path="/private"
            exact
            render={props => (
              <Private setNavState={this.setNavState} {...props} />
            )}
          />
          <Route
            path="/info"
            exact
            render={props => (
              <Info setNavState={this.setNavState} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
