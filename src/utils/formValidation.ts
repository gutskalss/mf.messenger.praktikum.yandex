import addMultipleListeners from './addMultipleListeners.js'

const regexList = {
  login: /^.{3,12}$/,
  password: /^.{6,22}$/,
  name: /^.{3,20}$/,
  surname: /^.{3,20}$/,
  phoneNumber: /^\d+$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

document.querySelectorAll('form').forEach(item => {
  item.addEventListener('submit', function (event) {
    event.preventDefault()
    const data = serialize(event.target)

    validateForm(event.target)

    console.log(data)
  })
})

document.querySelectorAll('[data-validate').forEach(item => {
  addMultipleListeners(item, ['focus', 'blur'], function (event) {
    event.preventDefault()
    validateInput(event.target)
  })
})

function validateForm(form) {
  Array.from((<HTMLElement>form).querySelectorAll('input')).map(input => {
    validateInput(input)
  })
}

function validateInput(input) {
  const errorElement = input.parentNode.querySelector('.input__error')
  const value = input.value

  switch (input.dataset.validate) {
    case 'login':
      toggleError(errorElement, regexList.login, value)
      break
    case 'password':
      toggleError(errorElement, regexList.password, value)
      break
    case 'name':
      toggleError(errorElement, regexList.name, value)
      break
    case 'surname':
      toggleError(errorElement, regexList.surname, value)
      break
    case 'phoneNumber':
      toggleError(errorElement, regexList.phoneNumber, value)
      break
    case 'email':
      toggleError(errorElement, regexList.email, value)
      break
  }
}

function toggleError(element, regex, value) {
  if (!regex.test(value)) {
    element.classList.remove('hide')
  } else {
    element.classList.add('hide')
  }
}

function serialize(form: EventTarget | null) {
  return Array.from((<HTMLElement>form).querySelectorAll('input')).reduce(
    (acc: object, { value, name }): object => {
      acc[name] = value
      return acc
    },
    {}
  )
}
