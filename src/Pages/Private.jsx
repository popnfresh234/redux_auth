import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Private extends Component {
  render() {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        <h4>This is the Private Page with a Typography container</h4>
      </Typography>
    );
  }
}

export default Private;
