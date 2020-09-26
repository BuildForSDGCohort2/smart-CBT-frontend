import * as types from '../actions/actionTypes';


const initialState = {
  success: false,
  error: false,
  msg: {},
  status: null,
  id: null,
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        error: true,
        success: false,
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case types.GET_SUCCESS:
      return {
        error: false,
        success: true,
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case types.CLEAR_MESSAGE:
      return {
        error: false,
        success: false,
        msg: {},
        status: null,
        id: null,
      }
    default:
      return state;
  }
}