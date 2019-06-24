import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { withRouter } from 'react-router-dom';
import NavHelper from './LinkTab.jsx';

class NavBar extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value}>
            <NavHelper.LinkTab label="Home" to="/home" history={this.props.history} />
            <NavHelper.LinkTab label="Profile" to="/profile" history={this.props.history} />
            <NavHelper.LinkTab label="Private" to="/private" history={this.props.history} />
            <NavHelper.LinkTab label="Info" to="/info" history={this.props.history} />

          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withRouter( NavBar );
