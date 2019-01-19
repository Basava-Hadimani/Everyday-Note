import {combineReducers} from 'redux';
import fetchUserReducer from './fetchUserReducer'
import notesReducer from './notesReducer';

export default  combineReducers({
    currentUser : fetchUserReducer,
    notes : notesReducer
})