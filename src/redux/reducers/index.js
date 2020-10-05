import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import messageReducer from './messageReducer';
import authReducer from './authReducer';
import examReducer from './examReducer';
import studentReducer from './studentReducer';




const rootReducer = combineReducers({
    message: messageReducer,
    auth: authReducer,
    student: studentReducer,
    exam: examReducer,
    // user: userReducer,
   
});

export default rootReducer;


