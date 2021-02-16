import { Block } from '../components/Block.js';
import { DialogPageData } from '../UIData/DialogPage.js';
import { Input } from '../components/Input.js';
import { ChatsList } from '../components/ChatsList.js';
import { Button } from '../components/Button.js';
import { ButtonsMenu } from '../components/ButtonsMenu.js';
import { Dialog } from '../components/Dialog.js';
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick.js';
import { toggleElements } from '../utils/toggleElements.js';
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler.js';
const dialogPageData = DialogPageData();
const searchInput = new Input(dialogPageData.searchInput);
const chatsList = new ChatsList({ chats: dialogPageData.chatsList });
const settingsButton = new Button(dialogPageData.settingsButton);
const settingsButtonsMenu = new ButtonsMenu(dialogPageData.settingsButtonsMenu);
const attachMethodsMenu = new ButtonsMenu(dialogPageData.attachMethodsMenu);
const dialog = new Dialog({ messagesBlocks: dialogPageData.dialog });
const attachMethodsButton = new Button(dialogPageData.attachMethodsButton);
const sendMessageButton = new Button(dialogPageData.sendMessageButton);
const sendMessageInput = new Input(dialogPageData.sendMessageInput);
const addUserInput = new Input(dialogPageData.addUserInput);
const deleteUserInput = new Input(dialogPageData.deleteUserInput);
const addUserButton = new Button(dialogPageData.addUserButton);
const deleteUserButton = new Button(dialogPageData.deleteUserButton);
const cancelDeleteChatButton = new Button(dialogPageData.cancelDeleteChatButton);
const deleteChatButton = new Button(dialogPageData.deleteChatButton);
const template = `
<div class="chats">
  <div class="chats__lside">
    <div class="chats__lside-head">
      <div class="chats__profile-link-container">
        <a class="chats__profile-link" href="/profile">
          Профиль
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
      <div class="chats__search">
        ${searchInput.render()}
      </div>
    </div>
    ${chatsList.render()}
  </div>
  <div class="chats__rside">
    <div class="dialog">
      <div class="dialog__top-bar">
        <div class="dialog__title">
          <div class="dialog__avatar">
            <img src="/img/avatars/Vadim.jpg" alt="Вадим" />
          </div>
          <div class="dialog__name">Вадим</div>
        </div>
        ${settingsButton.render()}
        ${settingsButtonsMenu.render()}
      </div>

      ${dialog.render()}

      <div class="dialog__bottom-bar">
        <form class="dialog__create-message-form" action="#">
          ${attachMethodsMenu.render()}
          ${attachMethodsButton.render()}
          <div class="dialog__new-message-input">
            ${sendMessageInput.render()}
          </div>
          ${sendMessageButton.render()}
        </form>
      </div>
    </div>
  </div>
</div>

<div id="addUserModal" class="modal hide">
  <form action="#" class="form form_modal">
    <div class="form__top">
      <h2 class="h3">Добавить пользователя</h2>
    </div>

    <div class="form__bottom">
      ${addUserInput.render()}
      ${addUserButton.render()}
    </div>
  </form>
</div>

<div id="removeUserModal" class="modal hide">
  <form action="#" class="form form_modal">
    <div class="form__top">
      <h2 class="h3">Удалить пользователя</h2>
    </div>

    <div class="form__bottom">
      ${deleteUserInput.render()}
      ${deleteUserButton.render()}
      </div>
  </form>
</div>

<div id="deleteChatModal" class="modal hide">
  <form action="#" class="form form_modal">
    <div class="form__top">
      <h2 class="h3">Вы уверены что хотите удалить чат?</h2>
    </div>

    <div class="form__bottom">
      ${cancelDeleteChatButton.render()}
      ${deleteChatButton.render()}
    </div>
  </form>
</div>
`;
const pageTemplate = Handlebars.compile(template);
class DialogPage extends Block {
    render() {
        return pageTemplate();
    }
    addEvents() {
        toggleElements();
        closeModalOnOutClick();
        addInputsValidation();
        formSubmitHandler();
    }
}
export { DialogPage };
//# sourceMappingURL=dialog.js.map