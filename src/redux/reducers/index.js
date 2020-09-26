import { combineReducers } from 'redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';
import authReducer from './authReducer';




const rootReducer = combineReducers({
    message: messageReducer,
    auth: authReducer,
    user: userReducer,
   
});

export default rootReducer;


