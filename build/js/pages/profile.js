var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { getUserInfo } from '../api/index.js';
export class ProfilePage extends Block {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: profileDataList } = ProfileData();
            const profileServerData = yield getUserInfo();
            const profileAvatarURL = profileServerData.avatar;
            profileDataList.forEach(item => {
                item.value = profileServerData[item.name];
            });
            const profileDataListTemplate = new ProfileDataList({ profileDataList });
            const sidebarButtonTemplate = new Button({
                template: 'sidebar',
                backLink: '/chats',
            });
            const profileAvatar = new ProfileAvatar({ profileAvatarURL });
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
              <form data-request-name="logout" data-redirect-to="/">
                <button type="submit" class="link link_profile link_danger">Выйти</button>
              </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      ${changeAvatarModal.render()}
    `;
            const pageTemplate = Handlebars.compile(template);
            return pageTemplate();
        });
    }
    addEvents() {
        toggleElements();
        addCustomFileInput();
        closeModalOnOutClick();
        addInputsValidation();
        formSubmitHandler();
    }
}
//# sourceMappingURL=profile.js.map