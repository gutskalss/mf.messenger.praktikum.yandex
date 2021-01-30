import render from '../utils/render.js';
import SignupFormData from '../services/SignupFormData.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
const { inputs, button } = SignupFormData();
const inputsTemplate = new Input({ inputs });
const buttonTemplate = new Button(button);
const template = `
<form action="/chats.html" class="form">
  <div class="form__top">
    <h2 class="h2">Регистрация</h2>
    ${inputsTemplate.render()}
  </div>

  <div class="form__bottom">
    ${buttonTemplate.render()}
    <a class="link" href="/index.html">Войти</a>
  </div>
</form>
`;
const pageTemplate = Handlebars.compile(template);
render('#root', pageTemplate());
//# sourceMappingURL=signup.js.map