function DialogPageData() {
    return {
        searchInput: {
            template: 'search',
            label: 'Поиск',
        },
        sendMessageInput: {
            template: 'clean',
            classList: 'input input_new-message',
            placeholder: 'Сообщение',
            type: 'text',
            id: 'message',
            name: 'message',
        },
        chatsList: [
            {
                avatar: {
                    link: '/img/avatars/Andrei.jpg',
                    alt: 'Андрей',
                },
                name: 'Андрей',
                own: false,
                lastMessage: 'Изображение',
                time: '10:49',
                unreaded: 12,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/kinoclub.jpg',
                    alt: 'Киноклуб',
                },
                name: 'Киноклуб',
                own: true,
                lastMessage: 'стикер',
                time: '12:00',
                unreaded: 0,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/Ilya.jpg',
                    alt: 'Илья',
                },
                name: 'Илья',
                own: false,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей!...',
                time: '15:12',
                unreaded: 4,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/Vadim.jpg',
                    alt: 'Вадим',
                },
                name: 'Вадим',
                own: true,
                lastMessage: 'Круто!',
                time: 'Пт',
                unreaded: 0,
                active: true,
            },
            {
                avatar: {
                    link: '/img/avatars/tet-a-tet.jpg',
                    alt: 'тет-а-теты',
                },
                name: 'тет-а-теты',
                own: false,
                lastMessage: 'И Human Interface Guidelines и Material Design рекомендуют...',
                time: 'Ср',
                unreaded: 0,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/123.jpg',
                    alt: '1, 2, 3',
                },
                name: '1, 2, 3',
                own: false,
                lastMessage: 'Миллионы россиян ежедневно проводят десятки часов свое...',
                time: 'Пн',
                unreaded: 0,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/design.jpg',
                    alt: 'Design Destroyer',
                },
                name: 'Design Destroyer',
                own: false,
                lastMessage: 'В 2008 году художник Jon Rafman начал собирать...',
                time: 'Пн',
                unreaded: 0,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/day.jpg',
                    alt: 'Day.',
                },
                name: 'Day.',
                own: false,
                lastMessage: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
                time: '1 Мая 2020',
                unreaded: 0,
                active: false,
            },
            {
                avatar: {
                    link: '/img/avatars/Stas.jpg',
                    alt: 'Стас Рогозин',
                },
                name: 'Стас Рогозин',
                own: false,
                lastMessage: 'Можно или сегодня или завтра вечером.',
                time: '12 Апр 2020',
                unreaded: 0,
                active: false,
            },
        ],
        settingsButton: {
            dataToggleId: 'dialog-settings-menu',
            classList: 'btn btn_settings',
            type: 'button',
            value: 'Settings',
            iconClassList: 'fas fa-ellipsis-v',
        },
        settingsButtonsMenu: {
            id: 'dialog-settings-menu',
            classList: 'toggle-menu toggle-menu_dialog-settings hide',
            buttons: [
                {
                    dataToggleId: 'addUserModal',
                    classList: 'btn btn_toggle-menu',
                    type: 'button',
                    value: 'Добавить пользователя',
                    iconClassList: 'toggle-menu__icon far fa-plus-square',
                    text: 'Добавить пользователя',
                },
                {
                    dataToggleId: 'removeUserModal',
                    classList: 'btn btn_toggle-menu',
                    type: 'button',
                    value: 'Удалить пользователя',
                    iconClassList: 'toggle-menu__icon far fa-times-circle',
                    text: 'Удалить пользователя',
                },
            ],
        },
        attachMethodsButton: {
            type: 'button',
            dataToggleId: 'attach-methods-menu',
            classList: 'btn btn_attach',
            iconClassList: 'fas fa-paperclip',
        },
        sendMessageButton: {
            type: 'submit',
            classList: 'btn btn_round btn_blue',
            iconClassList: 'fas fa-arrow-right',
        },
        attachMethodsMenu: {
            id: 'attach-methods-menu',
            classList: 'toggle-menu toggle-menu_attach-methods hide',
            buttons: [
                {
                    classList: 'btn btn_toggle-menu',
                    type: 'button',
                    value: 'Фото или Видео',
                    iconClassList: 'toggle-menu__icon far fa-images',
                    text: 'Фото или Видео',
                },
                {
                    dataToggleId: '',
                    classList: 'btn btn_toggle-menu',
                    type: 'button',
                    value: 'Файл',
                    iconClassList: 'toggle-menu__icon fas fa-file-upload',
                    text: 'Файл',
                },
                {
                    dataToggleId: '',
                    classList: 'btn btn_toggle-menu',
                    type: 'button',
                    value: 'Локация',
                    iconClassList: 'toggle-menu__icon fas fa-map-marker-alt',
                    text: 'Локация',
                },
            ],
        },
        dialog: [
            {
                type: 'own',
                messages: [
                    {
                        type: 'text',
                        text: 'Спасибо!',
                        time: '12:00',
                        read: true,
                    },
                    {
                        type: 'text',
                        text: 'Интересно!',
                        time: '12:00',
                        read: true,
                    },
                    {
                        type: 'text',
                        text: 'Круто!',
                        time: '11:59',
                        read: true,
                    },
                ],
            },
            {
                type: 'someone',
                messages: [
                    {
                        type: 'image',
                        url: './img/dialog-photo.jpg',
                        alt: 'Photo',
                        time: '11:56',
                        read: true,
                    },
                    {
                        type: 'text',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                        time: '11:56',
                        read: true,
                    },
                ],
            },
            {
                type: 'date',
                date: '19 июня',
            },
        ],
        addUserButton: {
            classList: 'btn btn_blue btn_submit',
            type: 'submit',
            value: 'Добавить',
            text: 'Добавить',
        },
        deleteUserButton: {
            classList: 'btn btn_blue btn_submit',
            type: 'submit',
            value: 'Удалить',
            text: 'Удалить',
        },
        deleteChatButton: {
            classList: 'btn btn_blue btn_submit',
            type: 'submit',
            value: 'Удалить чат',
            text: 'Удалить чат',
        },
        cancelDeleteChatButton: {
            dataToggleId: 'deleteChatModal',
            classList: 'btn btn_submit',
            type: 'button',
            value: 'Отмена',
            text: 'Отмена',
        },
        addUserInput: {
            id: 'add_user',
            name: 'add_user',
            classList: 'input',
            type: 'text',
            placeholder: ' ',
            label: 'Логин',
            errorMessage: 'Неверный логин',
        },
        deleteUserInput: {
            id: 'remove_user',
            name: 'remove_user',
            classList: 'input',
            type: 'text',
            placeholder: ' ',
            label: 'Логин',
            errorMessage: 'Неверный логин',
        },
    };
}
export { DialogPageData };
//# sourceMappingURL=DialogPage.js.map