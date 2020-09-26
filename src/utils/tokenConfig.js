// import moment from 'moment';

export const finishAuthentication = (token, userData, expires_at) => {
    sessionStorage.setItem('nguvu_jwt', token);
    sessionStorage.setItem('nguvu_user_data', JSON.stringify(userData));
    localStorage.setItem("checked", JSON.stringify(userData.anonymity))
    // sessionStorage.setItem('nguvu_jwt_expire', JSON.stringify(expires_at));
    // console.log(userData)
    // sessionStorage.setItem('access_token', token);
    // sessionStorage.setItem('id', userData.id);
    // sessionStorage.setItem('expires_at', expires_at);
    // sessionStorage.setItem('email', userData.email);
};

export const getToken = () => {
    let token = sessionStorage.getItem('nguvu_jwt');
    if (token) {
        return token;
    }
    return null;
};
// export const getToken = () => {
//     let token = sessionStorage.getItem('nguvu_jwt');
//     if (token && !isSessionExpired()) {
//         return token;
//     }
//     return null;
// };

export const getUserdata = () => {
    let userData = sessionStorage.getItem('nguvu_user_data');
    if (userData) {
        return JSON.parse(userData);
    }
    return null;
};

export const updateUserData = (userData) => {
    sessionStorage.setItem('nguvu_user_data', JSON.stringify(userData));
}

export const deleteToken = () => {
    sessionStorage.removeItem('nguvu_jwt');
    sessionStorage.removeItem('nguvu_user_data');
};

// export const isSessionExpired = () => {
//     const jwt = sessionStorage.getItem('nguvu_jwt_expire');
//     if (!jwt) {
//         return true;
//     } else {
//         return moment(JSON.parse(jwt)).isBefore(moment());
//     }
// };