import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { setNavPosition } from '../navActions';

class LinkTab extends Component {
  render() {
    const { setNavPos, ...props } = this.props;

    return (
      <Tab
        component="a"
        onClick={( event ) => {
          event.preventDefault();
          this.props.history.push( this.props.to );
          setNavPos( this.props.to );
        }}
        {...props}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ( {
  setNavPos: pos => dispatch( setNavPosition( pos ) ),
} );

export default connect( null, mapDispatchToProps )( LinkTab );
