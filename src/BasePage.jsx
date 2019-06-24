import { Component } from 'react';

class BasePage extends Component {
  constructor( props ) {
    super( props );

    this.lookup = {
      '/home': () => 0,
      '/profile': () => 1,
      '/private': () => 2,
      '/info': () => 3,
    };
  }

  componentDidMount() {
    const { history, setNavState } = this.props;
    const fn = this.lookup[history.location.pathname];
    if ( fn ) {
      setNavState( null, fn() );
    }
  }
}

export default BasePage;
