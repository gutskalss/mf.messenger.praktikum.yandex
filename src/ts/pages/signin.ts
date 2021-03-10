import { LoginFormData } from '../UIData/LoginForm'
import { Block } from '../components/Block'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler'

const Handlebars = require('handlebars')

const loginFormData = LoginFormData()
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
const inputsTemplate = new Input({
  inputs: loginFormData.inputs as InputData[],
})
const buttonTemplate = new Button(loginFormData.button)

const template = `
<form data-request-name="signin" data-redirect-to="/chats" class="form">
  <div class="form__top">
    <h2 class="h2">Вход</h2>
    ${inputsTemplate.render()}
  </div>

  <div class="form__bottom">
    ${buttonTemplate.render()}
    <a class="link" href="/signup">Нет аккаунта?</a>
  </div>
</form>
`

const pageTemplate = Handlebars.compile(template)

export class SigninPage extends Block {
  render() {
    return pageTemplate()
  }

  addEvents() {
    addInputsValidation()
    formSubmitHandler()
  }
}
