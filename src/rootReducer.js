import { combineReducers } from 'redux';
import navReducer from './navReducer.js';

export default combineReducers( {
  navState: navReducer,
} );
