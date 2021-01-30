import render from '../utils/render.js';
import LoginFormData from '../services/LoginFormData.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
const loginFormData = LoginFormData();
const inputsTemplate = new Input({ inputs: loginFormData.inputs });
const buttonTemplate = new Button(loginFormData.button);
const template = `
<form action="#" class="form">
  <div class="form__top">
    <h2 class="h2">Вход</h2>
    ${inputsTemplate.render()}
  </div>

  <div class="form__bottom">
    ${buttonTemplate.render()}
    <a class="link" href="/signup.html">Нет аккаунта?</a>
  </div>
</form>
`;
const pageTemplate = Handlebars.compile(template);
render('#root', pageTemplate());
//# sourceMappingURL=login.js.map