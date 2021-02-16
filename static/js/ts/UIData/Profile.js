function ProfileData() {
    return {
        data: [
            {
                name: 'email',
                value: 'pochta@yandex.ru',
                label: 'Почта',
                type: 'email',
                id: 'email',
            },
            {
                name: 'login',
                value: 'ivanivanov',
                label: 'Логин',
                type: 'text',
                id: 'login',
            },
            {
                name: 'first_name',
                value: 'Сергей',
                label: 'Имя',
                type: 'text',
                id: 'first_name',
            },
            {
                name: 'second_name',
                value: 'Гуцкал',
                label: 'Фамилия',
                type: 'text',
                id: 'second_name',
            },
            {
                name: 'display_name',
                value: 'Сергей',
                label: 'Имя в чате',
                type: 'text',
                id: 'display_name',
            },
            {
                name: 'phone',
                value: '+7 (909) 967 30 30',
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
                value: 'qwerty123',
                label: 'Старый пароль',
                type: 'password',
                id: 'oldPassword',
            },
            {
                name: 'newPassword',
                value: '654321ytrewq',
                label: 'Новый пароль',
                type: 'password',
                id: 'newPassword',
            },
            {
                name: 'newPassword_repeat',
                value: '654321ytrewq',
                label: 'Повторите новый пароль',
                type: 'password',
                id: 'newPassword_repeat',
            },
        ],
    };
}
export { ProfileData };
//# sourceMappingURL=Profile.js.map