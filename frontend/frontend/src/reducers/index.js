//this be the root reducer- combines reducers
import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    timelines:timelineReducer,
    auth_token:loginReducer
});
