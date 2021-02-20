import { SignupFormData } from '../UIData/SignupForm.js'
import { Block } from '../components/Block.js'
import { Input } from '../components/Input.js'
import { Button } from '../components/Button.js'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler.js'

const { inputs, button } = SignupFormData()

const inputsTemplate = new Input({ inputs })
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
