import axios from "../../utils/axios-base";
import * as types from './actionTypes'
import * as endpoints from '../../utils/endpoints';
import * as tokenConfig from '../../utils/tokenConfig.js';
import { returnErrors, returnSuccess } from './messageActions';

const loadAuthUserStart = () => ({
    type: types.LOAD_AUTH_USER_START
})

const loadAuthUserSuccess = () => ({
    type: types.LOAD_AUTH_USER_SUCCESS
})

export const loadAuthUser = () => (dispatch, getState) => {
    dispatch(loadAuthUserStart())
    const token = getState().auth.token;
    if (token) {
        dispatch(loadAuthUserSuccess())
    } else {
        dispatch(loginFailed())
    }
}

const loginStart = () => ({
    type: types.LOGIN_START
})

const loginSuccess = (token, user) => ({
    type: types.LOGIN_SUCCESS,
    token,
    user
})

const loginFailed = () => ({
    type: types.LOGIN_FAILED
})

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
})

export const adminLogin = (formData) => (dispatch) => {
    dispatch(loginStart());
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'X-Requested-With': 'XMLHttpRequest',
        }
    }
    const endPoint = endpoints.ADMIN_URL
    axios
        .post(`${endPoint}/login`, formData, config)
        .then(res => {
            const token = res.data.token;
            const user = res.data;
            // const expires_at = res.data.auth.expires_at
            tokenConfig.finishAuthentication(token, user)
            // tokenConfig.finishAuthentication(token, user, expires_at)
            dispatch(loginSuccess(token, user))
        })
        .catch(err => {
            dispatch(loginFailed())
            console.log(err)
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}


export const teacherSignIn = (formData) => (dispatch) => {
    dispatch(loginStart());
    const config = {
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.USERS_URL
    axios
        .post(`${endPoint}/login`, formData, config)
        .then(res => {
            const token = res.data.token;
            const user = res.data;
            // const expires_at = res.data.auth.expires_at
            tokenConfig.finishAuthentication(token, user)
            dispatch(loginSuccess(token, user))
        })
        .catch(err => {
            dispatch(loginFailed())
            console.log(err)
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}

export const therapistSignup = formData => (dispatch) => {
    dispatch(addUserStart());
    const config = {
        headers: {
            // Accept: 'application/json',
            // 'content-type': 'multipart/form-data',y
            
        }
    }
    const endPoint = endpoints.ADMIN_URL
    console.log("from actions", formData)
    axios
        .post(`${endPoint}/sign-up`, formData, config)
        .then(res => {

            dispatch(addUserSuccess(res.data))
        })
        .catch(err => {
            dispatch(addUserFail())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}


export const userSignup = formData => (dispatch) => {
    dispatch(addUserStart());
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    const endPoint = endpoints.USERS_URL
    axios
        .post(`${endPoint}/sign-up`, formData, config)
        .then(res => {

            dispatch(addUserSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(addUserFail())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}


//FORGOT PASSWORD

const forgotPasswordStart = () => ({
    type: types.FORGOT_PASSWORD_START
})

const forgotPasswordSuccess = (data) => ({
    type: types.FORGOT_PASSWORD_SUCCESS,
    data
})
const forgotPasswordFail = (data) => ({
    type: types.FORGOT_PASSWORD_FAIL,
    data
})

export const forgotPassword = formData => (dispatch) => {
    dispatch(forgotPasswordStart());

    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    // const endPoint = endpoints.USERS_URL
    axios
        .post(`auth/forgotpassword`, formData, config)
        .then(res => {

            dispatch(forgotPasswordSuccess(res.data))
            dispatch(returnErrors(res.response.data, res.response.status))

        })
        .catch(err => {
            console.log(err)
            dispatch(forgotPasswordFail())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}




export const logout = () => dispatch => {
    // let token = tokenConfig.getToken();
    // const config = {
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         "authorization": "Basic dW5kZWZpbmVkOnVuZGVmaW5lZA=="
    //     }
    // }
    // let data = {
    //     access_token: token
    // }
    // const endpoint = endpoints.LOGOUT_URL
    // axios
    //     .post(endpoint, data, config)
    // .then(res => {
    dispatch(logoutSuccess())
    // }).catch(err => {
    //     dispatch(logoutSuccess())
    // });
};


const addUserStart = () => ({
    type: types.ADD_USER_START
})

const addUserFail = () => ({
    type: types.ADD_USER_FAILED
})

const addUserSuccess = (data) => ({
    type: types.ADD_USER_SUCCESS,
    data
})

export const addUser = formData => dispatch => {
    dispatch(addUserStart())
    const config = {
        headers: {
            "Accept": "application/json, text/plain, */*",
        }
    }
    const endpoint = endpoints.AUTH_URL
    axios
        .post(`${endpoint}/register`, formData, config)
        .then(res => {
            dispatch(returnSuccess(res.data.message))
        }).catch(err => {
            dispatch(addUserFail())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}



const verifyUserStart = () => ({
    type: types.VERIFY_USER_START
})

const verifyUserSuccessful = (token, user) => ({
    type: types.VERIFY_USER_SUCCESFUL,
    token,
    user
})

const verifyUserFailed = () => ({
    type: types.VERIFY_USER_FAILED
})


export const verifyUser = () => dispatch => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    const email = urlParams.get('email');

    dispatch(verifyUserStart())
    const config = {
        headers: {
            "Accept": "application/json, text/plain, */*",
        }
    }
    const endpoint = endpoints.AUTH_URL;
    axios
        .get(`${endpoint}/register/verify/${token}/${email}`, config)
        .then(res => {
            dispatch(verifyUserSuccessful(res.data))
            dispatch(returnSuccess(res.data.message))
        }).catch(err => {
            dispatch(verifyUserFailed())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}



const resendVerificationStart = () => ({
    type: types.RESEND_VERIFICATION_START
})

const resendVerificationSuccessful = (token, user) => ({
    type: types.RESEND_VERIFICATION_SUCCESFUL,
    token,
    user
})

const resendVerificationFailed = () => ({
    type: types.RESEND_VERIFICATION_FAILED
})

export const resendVerification = (email) => dispatch => {


    dispatch(resendVerificationStart())
    const config = {
        headers: {
            "Accept": "application/json, text/plain, */*",
        }
    }
    const endpoint = endpoints.AUTH_URL;
    axios
        .post(`${endpoint}/email/verification`, email, config)
        .then(res => {
            dispatch(resendVerificationSuccessful(res.data))
            dispatch(returnSuccess(res.data.message))
        }).catch(err => {
            console.log(err)
            dispatch(resendVerificationFailed())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}


export const googleLogin = formData => (dispatch) => {
    dispatch(loginStart());
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        }
    }
    const endPoint = endpoints.GOOGLE_LOGIN_URL
    axios
        .post(endPoint, formData, config)
        .then(res => {
            const token = res.data.auth.access_token
            let user = res.data.data
            const expires_at = res.data.auth.expires_at
            tokenConfig.finishAuthentication(token, user, expires_at)
            dispatch(loginSuccess(token, user))
        })
        .catch(err => {
            dispatch(loginFailed())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}
export const facebookLogin = formData => (dispatch) => {
    dispatch(loginStart());
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        }
    }
    const endPoint = endpoints.FACEBOOK_LOGIN_URL
    axios
        .post(endPoint, formData, config)
        .then(res => {
            const token = res.data.auth.access_token
            let user = res.data.data
            const expires_at = res.data.auth.expires_at
            tokenConfig.finishAuthentication(token, user, expires_at)
            dispatch(loginSuccess(token, user))
        })
        .catch(err => {
            dispatch(loginFailed())
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}