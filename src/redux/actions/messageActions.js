import * as types from './actionTypes';

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: types.GET_ERRORS,
    payload: { msg, status, id }
  };
};

export const returnSuccess = (msg, status, id = null) => {
  return {
    type: types.GET_SUCCESS,
    payload: { msg, status, id }
  };
};

// CLEAR ERRORS
export const clearMessage = () => {
  return {
    type: types.CLEAR_MESSAGE
  };
};


export const clearErrorMessage = () => dispatch => {
  dispatch(clearMessage())
  
}