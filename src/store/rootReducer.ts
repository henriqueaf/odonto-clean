import { combineReducers } from 'redux';
import clientsReducer from './clients/reducer';

export default combineReducers({
  clients: clientsReducer,
});
