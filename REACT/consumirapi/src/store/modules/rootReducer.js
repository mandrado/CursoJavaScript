import { combineReducers } from 'redux';
import exemploReducer from './exemplo/reducer';

export default combineReducers({
  exemplo: exemploReducer,
});
