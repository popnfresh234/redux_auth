import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Private from './Pages/Private.jsx';
import Profile from './Pages/Profile.jsx';
import Info from './Pages/Info.jsx';
import { setNavPosition } from './navActions';

class App extends Component {
  componentDidMount() {
    this.handleNav( );
  }

  componentDidUpdate() {
    this.handleNav( );
  }

  handleNav( ) {
    const { setNavPos, history } = this.props;
    setNavPos( history.location.pathname );
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/home"
            exact
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            path="/profile"
            exact
            render={props => (
              <Profile {...props} />
            )}
          />
          <Route
            path="/private"
            exact
            render={props => (
              <Private {...props} />
            )}
          />
          <Route
            path="/info"
            exact
            render={props => (
              <Info {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ( {
  setNavPos: pos => dispatch( setNavPosition( pos ) ),
} );

App.propTypes = {
  setNavPos: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter( connect( null, mapDispatchToProps )( App ) );
