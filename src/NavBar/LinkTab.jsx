import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';

class LinkTab extends Component {
  render() {
    const { history, to } = this.props;
    return (
      <Tab
        component="a"
        onClick={( event ) => {
          event.preventDefault();
          history.push( to );
        }}
        {...this.props}
      />
    );
  }
}

LinkTab.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkTab;
