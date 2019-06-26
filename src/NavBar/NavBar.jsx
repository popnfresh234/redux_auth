import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { withRouter } from 'react-router-dom';
import LinkTab from './LinkTab.jsx';

class NavBar extends Component {
  render() {
    const { navPos } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Tabs value={navPos}>
            <LinkTab label="Home" to="/home" history={this.props.history} />
            <LinkTab label="Profile" to="/profile" history={this.props.history} />
            <LinkTab label="Private" to="/private" history={this.props.history} />
            <LinkTab label="Info" to="/info" history={this.props.history} />

          </Tabs>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    navPos: state.navState.navPos,
  };
}

export default withRouter( connect( mapStateToProps )( NavBar ) );
