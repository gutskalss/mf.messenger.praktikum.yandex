export function SignupFormData() {
  return {
    button: {
      classList: 'btn btn_blue btn_submit',
      type: 'submit',
      value: 'Зарегистрироваться',
      text: 'Зарегистрироваться',
    },
    inputs: [
      {
        id: 'email',
        name: 'email',
        classList: 'input',
        type: 'email',
        placeholder: ' ',
        label: 'Почта',
        errorMessage: 'Неверный формат email',
        dataValidate: 'email',
      },
      {
        id: 'login',
        name: 'login',
        classList: 'input',
        type: 'text',
        placeholder: ' ',
        label: 'Логин',
        errorMessage: '3-12 символов',
        dataValidate: 'login',
      },
      {
        id: 'first_name',
        name: 'first_name',
        classList: 'input',
        type: 'text',
        placeholder: ' ',
        label: 'Имя',
        errorMessage: '3-20 символов',
        dataValidate: 'name',
      },
      {
        id: 'second_name',
        name: 'second_name',
        classList: 'input',
        type: 'text',
        placeholder: ' ',
        label: 'Фамилия',
        errorMessage: '3-20 символов',
        dataValidate: 'surname',
      },
      {
        id: 'phone',
        name: 'phone',
        classList: 'input',
        type: 'tel',
        placeholder: ' ',
        label: 'Телефон',
        errorMessage: 'Только цифры',
        dataValidate: 'phoneNumber',
      },
      {
        id: 'password',
        name: 'password',
        classList: 'input',
        type: 'password',
        placeholder: ' ',
        label: 'Пароль',
        errorMessage: '6-22 символов',
        dataValidate: 'password',
      },
      {
        id: 'password_repeat',
        name: 'password_repeat',
        classList: 'input',
        type: 'password',
        placeholder: ' ',
        label: 'Пароль (еще раз)',
        errorMessage: '6-22 символов',
        dataValidate: 'password',
      },
    ],
  }
}
