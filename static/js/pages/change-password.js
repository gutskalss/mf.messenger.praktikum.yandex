import render from '../utils/render.js';
import ProfileData from '../services/ProfileData.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import ProfileAvatar from '../components/ProfileAvatar.js';
import ChangeAvatarModal from '../components/ChangeAvatarModal.js';
const profileData = ProfileData();
const sidebarButtonTemplate = new Button({ template: 'sidebar' });
const profileAvatar = new ProfileAvatar({});
const changePasswordInputs = new Input({
    template: 'profile',
    inputs: profileData.changePasswordData,
});
const submitButtonTemplate = new Button(profileData.saveButton);
const changeAvatarModal = new ChangeAvatarModal({});
const template = `
    <div class="profile">
    ${sidebarButtonTemplate.render()}
    <div class="profile__container hide-scrollbar">
      <div class="profile__data">
        ${profileAvatar.render()}

        <div class="profile__name">Сергей</div>

        <form class="form_profile-edit" action="#">
          ${changePasswordInputs.render()}
          ${submitButtonTemplate.render()}
        </form>
      </div>
    </div>
  </div>
  ${changeAvatarModal.render()}
`;
const pageTemplate = Handlebars.compile(template);
render('#root', pageTemplate());
//# sourceMappingURL=change-password.js.map