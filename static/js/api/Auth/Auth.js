import { HTTPTransport } from '../HTTPTransport/HTTPTransport.js';
const baseURL = 'https://ya-praktikum.tech/api/v2/';
function signin(data, redirectURL) {
    const request = new HTTPTransport();
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
    };
    const url = `${baseURL}auth/signin`;
    request
        .post(url, {
        data: JSON.stringify(data),
        headers,
    })
        .then(result => {
        if (result.status === 200) {
            window.location.href = redirectURL;
        }
        else {
            const reason = JSON.parse(result.response).reason;
            alert(reason);
        }
    })
        .catch(err => console.error(err));
}
function signup(data, redirectURL) {
    const request = new HTTPTransport();
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
    };
    const url = `${baseURL}auth/signup`;
    request
        .post(url, {
        data: JSON.stringify(data),
        headers,
    })
        .then(result => {
        if (result.status === 200) {
            window.location.href = redirectURL;
        }
        else {
            const reason = JSON.parse(result.response).reason;
            alert(reason);
        }
    })
        .catch(err => console.error(err));
}
function logout(redirectURL) {
    const request = new HTTPTransport();
    const url = `${baseURL}auth/logout`;
    request
        .post(url)
        .then(result => {
        if (result.status === 200) {
            window.location.href = redirectURL;
        }
        else {
            const reason = JSON.parse(result.response).reason;
            alert(reason);
        }
    })
        .catch(err => console.error(err));
}
function getUserInfo() {
    const request = new HTTPTransport();
    const url = `${baseURL}/auth/user`;
    return request
        .get(url)
        .then(result => {
        if (result.status === 200) {
            return JSON.parse(result.response);
        }
        else {
            const reason = JSON.parse(result.response).reason;
            alert(reason);
        }
    })
        .catch(err => console.error(err));
}
export { signin, signup, logout, getUserInfo };
//# sourceMappingURL=Auth.js.map