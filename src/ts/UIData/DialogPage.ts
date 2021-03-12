export function DialogPageData() {
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
    chatsItem: {
      avatar: {
        link: '',
        alt: '',
      },
      title: '',
      own: false,
      lastMessage: 'Last message',
      time: '00:00',
      unreaded: 0,
      active: false,
    },

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
    message: {
      type: 'own',
      contentType: 'text',
      text: '',
      time: '12:00',
      read: true,
    },
    // {
    //   type: 'someone',
    //   messages: [
    //     {
    //       type: 'image',
    //       url: './img/dialog-photo.jpg',
    //       alt: 'Photo',
    //       time: '11:56',
    //       read: true,
    //     },
    //     {
    //       type: 'text',
    //       text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

    //       Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
    //       time: '11:56',
    //       read: true,
    //     },
    //   ],
    // },
    // {
    //   type: 'date',
    //   date: '19 июня',
    // },
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
    addChatButton: {
      classList: 'btn btn_blue btn_submit',
      type: 'submit',
      value: 'Создать чат',
      text: 'Создать чат',
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
      label: 'ID пользователя',
      errorMessage: 'Неверный ID',
    },
    deleteUserInput: {
      id: 'remove_user',
      name: 'remove_user',
      classList: 'input',
      type: 'text',
      placeholder: ' ',
      label: 'ID пользователя',
      errorMessage: 'Неверный ID',
    },
    addChatInput: {
      id: 'chat-title',
      name: 'title',
      classList: 'input',
      type: 'text',
      placeholder: ' ',
      label: 'Имя чата',
      errorMessage: 'Неверное имя чата',
    },
  }
}
