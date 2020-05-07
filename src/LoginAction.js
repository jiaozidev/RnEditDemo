import {LOGIN_ERROR, LOGIN_IN, LOGIN_OUT} from './LoginType';

export function loginFail() {
    return {
        type: LOGIN_ERROR,
    };
}

export function loginIn(responseData) {
    return {
        type: LOGIN_IN,
        responseUserMessage: responseData,
    };
}

export function loginOut() {
    return {
        type: LOGIN_OUT,
    };
}

export function login() {
    return dispatch => {
        let result = fetch('https://www.baidu.com')
            .then((res) => {
                    dispatch(
                        loginIn({
                            name: '小明',
                            age: 12,
                            image: '',
                        }));
                },
            ).catch((e) => {
                dispatch(loginFail());
            });
    };
}
