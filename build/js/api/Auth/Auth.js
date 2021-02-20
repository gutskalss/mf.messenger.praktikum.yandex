import { HTTPTransport } from '../HTTPTransport/HTTPTransport.js';
const baseURL = 'https://ya-praktikum.tech/api/v2/';
export function signin(data, redirectURL) {
    const request = new HTTPTransport();
    const url = `${baseURL}auth/signin`;
    request
        .post(url, { data: JSON.stringify(data) })
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
export function signup(data, redirectURL) {
    const request = new HTTPTransport();
    const url = `${baseURL}auth/signup`;
    request
        .post(url, { data: JSON.stringify(data) })
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
export function logout(redirectURL) {
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
export function getUserInfo() {
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
//# sourceMappingURL=Auth.js.map