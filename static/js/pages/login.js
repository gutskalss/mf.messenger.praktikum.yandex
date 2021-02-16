import { LoginFormData } from '../UIData/LoginForm.js';
import { Block } from '../components/Block.js';
import { Input } from '../components/Input.js';
import { Button } from '../components/Button.js';
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler.js';
const loginFormData = LoginFormData();
const inputsTemplate = new Input({ inputs: loginFormData.inputs });
const buttonTemplate = new Button(loginFormData.button);
const template = `
<form data-request-name="signin" data-redirect="/chats" class="form">
  <div class="form__top">
    <h2 class="h2">Вход</h2>
    ${inputsTemplate.render()}
  </div>

  <div class="form__bottom">
    ${buttonTemplate.render()}
    <a class="link" href="/signup">Нет аккаунта?</a>
  </div>
</form>
`;
const pageTemplate = Handlebars.compile(template);
class LoginPage extends Block {
    render() {
        return pageTemplate();
    }
    addEvents() {
        addInputsValidation();
        formSubmitHandler();
    }
}
export { LoginPage };
//# sourceMappingURL=login.js.map