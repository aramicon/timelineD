//this be the root reducer- combines reducers
import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import timelineDetailsReducer from './timelineDetailsReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    timelines:timelineReducer,
    timelineDetails:timelineDetailsReducer,
    auth_token:loginReducer
});
