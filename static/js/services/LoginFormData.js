export default function LoginFormData() {
    return {
        button: {
            classList: 'btn btn_blue btn_submit',
            type: 'submit',
            value: 'Авторизоваться',
            text: 'Авторизоваться',
        },
        inputs: [
            {
                id: 'login',
                name: 'login',
                classList: 'input',
                type: 'text',
                placeholder: ' ',
                label: 'Логин',
                errorMessage: 'Неверный логин',
                dataValidate: 'login',
            },
            {
                id: 'password',
                name: 'password',
                classList: 'input',
                type: 'password',
                placeholder: ' ',
                label: 'Пароль',
                errorMessage: 'Неверный пароль',
                dataValidate: 'password',
            },
        ],
    };
}
//# sourceMappingURL=LoginFormData.js.map