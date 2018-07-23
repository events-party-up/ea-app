import { combineReducers } from 'redux';
import userReducer from '../containers/user/userReducer';
import eventsReducer from '../containers/events/eventsReducer';

export default combineReducers({
  user: userReducer,
  events: eventsReducer
});
