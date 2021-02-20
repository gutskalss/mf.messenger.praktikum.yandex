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
import { Button } from '../components/Button.js';
import { Input } from '../components/Input.js';
import { ProfileAvatar } from '../components/ProfileAvatar.js';
import { ChangeAvatarModal } from '../components/ChangeAvatarModal.js';
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick.js';
import { toggleElements } from '../utils/toggleElements.js';
import { addCustomFileInput } from '../utils/addCustomFileInput.js';
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler.js';
import { getUserInfo } from '../api/index.js';
export class ChangePasswordPage extends Block {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const { changePasswordData, saveButton } = ProfileData();
            const profileServerData = yield getUserInfo();
            const profileAvatarURL = profileServerData.avatar;
            const sidebarButtonTemplate = new Button({
                template: 'sidebar',
                backLink: '/profile',
            });
            const profileAvatar = new ProfileAvatar({ profileAvatarURL });
            const changePasswordInputs = new Input({
                template: 'profile',
                inputs: changePasswordData,
            });
            const submitButtonTemplate = new Button(saveButton);
            const changeAvatarModal = new ChangeAvatarModal({});
            const template = `
        <div class="profile">
        ${sidebarButtonTemplate.render()}
        <div class="profile__container hide-scrollbar">
          <div class="profile__data">
            ${profileAvatar.render()}

            <div class="profile__name">Сергей</div>

            <form data-request-name="changeUserPassword" data-redirect-to="/profile" class="form_profile-edit">
              ${changePasswordInputs.render()}
              ${submitButtonTemplate.render()}
            </form>
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
//# sourceMappingURL=change-password.js.map