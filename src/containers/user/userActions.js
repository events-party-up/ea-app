import * as c from './userConstants';

export const doLogin = (username, password) => dispatch => {
    let fullName = '';
    if (username === 'kwilliams') {
        fullName = 'Kevin Williams'
        dispatch({
            type: c.USER_LOGIN,
            username,
            fullName
        })

    } else {
        dispatch({
            type: c.USER_LOGIN_FAILURE,
            username,
            fullName,
            error: 'Incorrect user name'
        })

    }

}