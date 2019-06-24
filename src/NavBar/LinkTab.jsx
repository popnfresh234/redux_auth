import React from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function LinkTab( props ) {
  return (
    <Tab
      component="a"
      onClick={( event ) => {
        event.preventDefault();
        props.history.push( props.to );
      }}
      {...props}
    />
  );
}

function TabContainer( props ) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default {
  LinkTab,
  TabContainer,
};
