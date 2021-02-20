export function ProfileData() {
    return {
        data: [
            {
                name: 'email',
                value: '',
                label: 'Почта',
                type: 'email',
                id: 'email',
            },
            {
                name: 'login',
                value: '',
                label: 'Логин',
                type: 'text',
                id: 'login',
            },
            {
                name: 'first_name',
                value: '',
                label: 'Имя',
                type: 'text',
                id: 'first_name',
            },
            {
                name: 'second_name',
                value: '',
                label: 'Фамилия',
                type: 'text',
                id: 'second_name',
            },
            {
                name: 'display_name',
                value: '',
                label: 'Имя в чате',
                type: 'text',
                id: 'display_name',
            },
            {
                name: 'phone',
                value: '',
                label: 'Телефон',
                type: 'tel',
                id: 'phone',
            },
        ],
        changeAvatar: {
            input: {
                template: 'file',
                type: 'file',
                name: 'avatar',
            },
            button: {
                classList: 'btn btn_submit btn_blue',
                type: 'submit',
                value: 'Поменять',
                text: 'Поменять',
            },
        },
        saveButton: {
            classList: 'btn btn_submit btn_blue',
            type: 'submit',
            value: 'Сохранить',
            text: 'Сохранить',
        },
        changePasswordData: [
            {
                name: 'oldPassword',
                value: '',
                label: 'Старый пароль',
                type: 'password',
                id: 'oldPassword',
            },
            {
                name: 'newPassword',
                value: '',
                label: 'Новый пароль',
                type: 'password',
                id: 'newPassword',
            },
        ],
    };
}
//# sourceMappingURL=Profile.js.map