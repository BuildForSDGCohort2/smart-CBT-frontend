// import moment from 'moment';

export const finishAuthentication = (token) => {
    sessionStorage.setItem('sid', token);
    // sessionStorage.setItem('smart-cbt_user_data', JSON.stringify(userData));
    // sessionStorage.setItem('smart-cbt_expire', JSON.stringify(expires_at));
    // console.log(userData)
    // sessionStorage.setItem('access_token', token);
    // sessionStorage.setItem('id', userData.id);
    // sessionStorage.setItem('expires_at', expires_at);
    // sessionStorage.setItem('email', userData.email);
};

export const getToken = () => {
    let token = sessionStorage.getItem('smart-cbt');
    if (token) {
        return token;
    }
    return null;
};

// export const getToken = () => {
//     let token = sessionStorage.getItem('smart-cbt');
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
    sessionStorage.removeItem('smart-cbt');
    sessionStorage.removeItem('nguvu_user_data');
};

// export const isSessionExpired = () => {
//     const jwt = sessionStorage.getItem('smart-cbt_expire');
//     if (!jwt) {
//         return true;
//     } else {
//         return moment(JSON.parse(jwt)).isBefore(moment());
//     }
// };