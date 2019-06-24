import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import BasePage from '../BasePage.jsx';


class Info extends BasePage {
  render() {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        <h4>This is the Info Page</h4>
      </Typography>
    );
  }
}

export default Info;
