import { signin, signup, logout, changeUserProfile, changeUserPassword, changeUserAvatar, } from '../index.js';
export function sendRequest(requestName, data, redirectURL) {
    switch (requestName) {
        case 'signin':
            signin(data, redirectURL);
            break;
        case 'signup':
            signup(data, redirectURL);
            break;
        case 'logout':
            logout(redirectURL);
            break;
        case 'changeUserProfile':
            changeUserProfile(data, redirectURL);
            break;
        case 'changeUserPassword':
            changeUserPassword(data, redirectURL);
            break;
        case 'changeUserAvatar':
            changeUserAvatar(data, redirectURL);
            break;
        default:
    }
}
//# sourceMappingURL=sendRequest.js.map