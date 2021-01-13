import {combineReducers} from 'redux' ; 
import userReducer from "./userReducers.js";
 const combineReducer = combineReducers ({
    userReducer,
});

export default combineReducer;