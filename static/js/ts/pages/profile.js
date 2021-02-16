import { ProfileData } from '../UIData/Profile.js';
import { Block } from '../components/Block.js';
import { ProfileDataList } from '../components/ProfileDataList.js';
import { Button } from '../components/Button.js';
import { ProfileAvatar } from '../components/ProfileAvatar.js';
import { ChangeAvatarModal } from '../components/ChangeAvatarModal.js';
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick.js';
import { toggleElements } from '../utils/toggleElements.js';
import { addCustomFileInput } from '../utils/addCustomFileInput.js';
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler.js';
const { data: profileData } = ProfileData();
const sidebarButtonTemplate = new Button({
    template: 'sidebar',
    backLink: '/chats',
});
const profileAvatar = new ProfileAvatar({});
const profileDataListTemplate = new ProfileDataList({
    profileData,
});
const changeAvatarModal = new ChangeAvatarModal({});
const template = `
    <div class="profile">
    ${sidebarButtonTemplate.render()}
    <div class="profile__container hide-scrollbar">
      <div class="profile__data">
        ${profileAvatar.render()}
        <div class="profile__name">Сергей</div>

        ${profileDataListTemplate.render()}

        <ul class="profile__list">
          <li class="profile__list-item">
            <a class="link link_profile" href="/profile-edit">
              Изменить данные
            </a>
          </li>
          <li class="profile__list-item">
            <a class="link link_profile" href="/change-password">
              Изменить пароль
            </a>
          </li>
          <li class="profile__list-item">
          <form method="post" action="https://ya-praktikum.tech/api/v2/auth/logout" data-redirect="/">
            <button type="submit" class="link link_profile link_danger" href="/">Выйти</button>
          </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
  ${changeAvatarModal.render()}
`;
const pageTemplate = Handlebars.compile(template);
class ProfilePage extends Block {
    render() {
        return pageTemplate();
    }
    addEvents() {
        toggleElements();
        addCustomFileInput();
        closeModalOnOutClick();
        addInputsValidation();
        formSubmitHandler();
    }
}
export { ProfilePage };
//# sourceMappingURL=profile.js.map