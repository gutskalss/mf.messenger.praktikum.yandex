import { SignupFormData } from '../UIData/SignupForm'
import { Block } from '../components/Block'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler'

const Handlebars = require('handlebars')

const { inputs, button } = SignupFormData()

type InputData = {
  id: string
  value: string
  name: string
  classList: string
  type: string
  placeholder: string
  label: string
  errorMessage: string
  dataValidate: string
}

const inputsTemplate = new Input({ inputs: inputs as InputData[] })
const buttonTemplate = new Button(button)

const template = `
<form data-request-name="signup" data-redirect-to="/chats" class="form">
  <div class="form__top">
    <h2 class="h2">Регистрация</h2>
    ${inputsTemplate.render()}
  </div>

  <div class="form__bottom">
    ${buttonTemplate.render()}
    <a class="link" href="/">Войти</a>
  </div>
</form>
`

const pageTemplate = Handlebars.compile(template)

export class SignupPage extends Block {
  render() {
    return pageTemplate()
  }

  addEvents() {
    addInputsValidation()
    formSubmitHandler()
  }
}
