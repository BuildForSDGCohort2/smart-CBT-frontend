import * as types from '../actions/actionTypes';
import * as tokenConfig from './../../utils/tokenConfig'


const initialState = {
  token: tokenConfig.getToken(),
  user: tokenConfig.getUserdata(),
  sid: [],
  isAuth: false,
  isLoading: false,
  data: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_AUTH_USER_START:
    case types.LOGIN_START:
    case types.ADD_USER_START:
    case types.VERIFY_USER_START:
    case types.RESEND_VERIFICATION_START:
    case types.FORGOT_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOAD_AUTH_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        sid: action.data.sid,
        isAuth: true,
        isLoading: false,
      }
    case types.LOGIN_FAILED:
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        user: null,
        isAuth: false,
        isLoading: false,
      }
    case types.ADD_USER_SUCCESS:
    case types.VERIFY_USER_SUCCESFUL:
    case types.RESEND_VERIFICATION_SUCCESFUL:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: action.data,
        isLoading: false,
      }
    case types.ADD_USER_FAILED:
    case types.VERIFY_USER_FAILED:
    case types.RESEND_VERIFICATION_FAILED:
    case types.FORGOT_PASSWORD_FAIL:

      return {
        ...state,
        isLoading: false,
      }


    default:
      return state;
  }
}