import { addMultipleListeners } from "./addMultipleListeners.js";
import { sendRequest } from "../api/index.js";
const regexList = {
    login: /^.{3,12}$/,
    password: /^.{6,22}$/,
    name: /^.{3,20}$/,
    surname: /^.{3,20}$/,
    phoneNumber: /^\d+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
export function formSubmitHandler() {
    document.querySelectorAll('form').forEach(item => {
        item.addEventListener('submit', function (event) {
            event.preventDefault();
            const data = serialize(event.target);
            if (validateForm(event.target)) {
                sendRequest(event.target.dataset.requestName, data, event.target.dataset.redirectTo);
            }
        });
    });
}
export function addInputsValidation() {
    document.querySelectorAll('[data-validate').forEach(item => {
        addMultipleListeners(item, ['focus', 'blur'], function (event) {
            event.preventDefault();
            validateInput(event.target);
        });
    });
}
function validateForm(form) {
    let formIsValid = true;
    Array.from(form.querySelectorAll('input')).map(input => {
        if (formIsValid && !validateInput(input)) {
            formIsValid = false;
        }
        else {
            validateInput(input);
        }
    });
    return formIsValid;
}
function validateInput(input) {
    const errorElement = input.parentNode.querySelector('.input__error');
    const value = input.value;
    switch (input.dataset.validate) {
        case 'login':
            return toggleError(errorElement, regexList.login, value);
        case 'password':
            return toggleError(errorElement, regexList.password, value);
        case 'name':
            return toggleError(errorElement, regexList.name, value);
        case 'surname':
            return toggleError(errorElement, regexList.surname, value);
        case 'phoneNumber':
            return toggleError(errorElement, regexList.phoneNumber, value);
        case 'email':
            return toggleError(errorElement, regexList.email, value);
    }
    return true;
}
function toggleError(element, regex, value) {
    if (!regex.test(value)) {
        element.classList.remove('hide');
        return false;
    }
    else {
        element.classList.add('hide');
        return true;
    }
}
function serialize(form) {
    return Array.from(form.querySelectorAll('input')).reduce((acc, { value, name }) => {
        acc[name] = value;
        return acc;
    }, {});
}
//# sourceMappingURL=formHandler.js.map