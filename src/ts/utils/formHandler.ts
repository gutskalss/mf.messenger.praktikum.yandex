import { addMultipleListeners } from './addMultipleListeners'
import { sendRequest } from '../api/index'

type StringIndexed = Record<string, any>
const regexList = {
  login: /^.{3,12}$/,
  password: /^.{6,22}$/,
  name: /^.{3,20}$/,
  surname: /^.{3,20}$/,
  phoneNumber: /^\d+$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export function formSubmitHandler() {
  document.querySelectorAll('form').forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault()
      const data = serialize(event.target)

      if (validateForm(event.target as HTMLFormElement)) {
        const {
          requestName,
          redirectTo,
        } = (event.target as HTMLElement)!.dataset
        sendRequest(requestName!, data, redirectTo!)
      }
    })
  })
}

export function addInputsValidation() {
  document.querySelectorAll('[data-validate').forEach((item) => {
    addMultipleListeners(item as HTMLElement, ['focus', 'blur'], (event) => {
      event.preventDefault()
      validateInput(event.target as HTMLInputElement)
    })
  })
}

function validateForm(form: HTMLFormElement) {
  let formIsValid: boolean = true

  Array.from((<HTMLElement>form).querySelectorAll('input')).map((input) => {
    if (formIsValid && !validateInput(input)) {
      formIsValid = false
    } else {
      validateInput(input)
    }
  })

  return formIsValid
}

function validateInput(input: HTMLInputElement) {
  const errorElement = input.parentNode!.querySelector(
    '.input__error'
  ) as HTMLDivElement
  const { value } = input

  switch (input.dataset.validate) {
    case 'login':
      return toggleError(errorElement, regexList.login, value)
    case 'password':
      return toggleError(errorElement, regexList.password, value)
    case 'name':
      return toggleError(errorElement, regexList.name, value)
    case 'surname':
      return toggleError(errorElement, regexList.surname, value)
    case 'phoneNumber':
      return toggleError(errorElement, regexList.phoneNumber, value)
    case 'email':
      return toggleError(errorElement, regexList.email, value)
  }

  return true
}

function toggleError(element: HTMLElement, regex: RegExp, value: string) {
  if (!regex.test(value)) {
    element.classList.remove('hide')
    return false
  }
  element.classList.add('hide')
  return true
}

function serialize(form: EventTarget | null) {
  return Array.from((<HTMLElement>form).querySelectorAll('input')).reduce(
    (acc: StringIndexed, { value, name }): object => {
      acc[name] = value
      return acc
    },
    {}
  )
}
