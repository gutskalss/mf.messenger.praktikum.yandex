import render from '../utils/render.js';
import ProfileData from '../services/ProfileData.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import ProfileAvatar from '../components/ProfileAvatar.js';
import ModalWindow from '../components/ModalWindow.js';
const profileData = ProfileData();
const sidebarButtonTemplate = new Button({ template: 'sidebar' });
const profileAvatar = new ProfileAvatar({});
const changeProfileInputs = new Input({
    template: 'profile',
    inputs: profileData.data,
});
const submitButtonTemplate = new Button(profileData.saveButton);
const modalWindow = new ModalWindow({ template: 'changeAvatar' });
const template = `
    <div class="profile">
    ${sidebarButtonTemplate.render()}
    <div class="profile__container hide-scrollbar">
      <div class="profile__data">
        ${profileAvatar.render()}

        <div class="profile__name">Сергей</div>

        <form class="form_profile-edit" action="#">
          ${changeProfileInputs.render()}
          ${submitButtonTemplate.render()}
        </form>
      </div>
    </div>
  </div>
  ${modalWindow.render()}
`;
const pageTemplate = Handlebars.compile(template);
render('#root', pageTemplate());
//# sourceMappingURL=profile-edit.js.map