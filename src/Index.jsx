import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App.jsx';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById( 'react-root' ),
);
