import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import termReducer from './termReducer';

export default combineReducers({
    videos: videoReducer,
    term: termReducer
});