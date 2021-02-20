import { HTTPTransport } from '../HTTPTransport/HTTPTransport.js';
const baseURL = 'https://ya-praktikum.tech/api/v2/';
export function changeUserProfile(data, redirectURL) {
    const request = new HTTPTransport();
    const url = `${baseURL}user/profile`;
    request
        .put(url, { data: JSON.stringify(data) })
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
export function changeUserPassword(data, redirectURL) {
    const request = new HTTPTransport();
    const url = `${baseURL}user/password`;
    request
        .put(url, { data: JSON.stringify(data) })
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
export function changeUserAvatar(data, redirectURL) {
    const request = new HTTPTransport();
    const url = `${baseURL}user/profile/avatar`;
    const image = document.getElementById('avatar').files[0];
    const formData = new FormData();
    formData.append('avatar', image);
    request
        .put(url, {
        data: formData,
        headers: null,
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
        .catch(function (err) {
        throw err;
    });
    request
        .put(url, { data: JSON.stringify(data) })
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
//# sourceMappingURL=User.js.map