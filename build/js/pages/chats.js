var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DialogPageData } from "../UIData/DialogPage.js";
import { Block } from "../components/Block.js";
import { Input } from "../components/Input.js";
import { ChatsList } from "../components/ChatsList.js";
import { Button } from "../components/Button.js";
import { closeModalOnOutClick } from "../utils/closeModalOnOutClick.js";
import { toggleElements } from "../utils/toggleElements.js";
import { addInputsValidation, formSubmitHandler } from "../utils/formHandler.js";
import { addDynamicModal } from "../utils/addDynamicModal.js";
import { getChats } from "../api/index.js";
export class ChatsPage extends Block {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const dialogPageData = DialogPageData();
            const chats = yield getChats();
            const chatItemTemplate = dialogPageData.chatsItem;
            const chatsRenderData = chats.reduce((acc, item) => {
                const { title, id } = item;
                const readyItem = Object.assign(Object.assign({}, chatItemTemplate), { title,
                    id });
                acc = [...acc, readyItem];
                return acc;
            }, []);
            const searchInput = new Input(dialogPageData.searchInput);
            const chatsList = new ChatsList({ chats: chatsRenderData });
            const cancelDeleteChatButton = new Button(dialogPageData.cancelDeleteChatButton);
            const deleteChatButton = new Button(dialogPageData.deleteChatButton);
            const addChatInput = new Input(dialogPageData.addChatInput);
            const addChatButton = new Button(dialogPageData.addChatButton);
            const addUserInput = new Input(dialogPageData.addUserInput);
            const deleteUserInput = new Input(dialogPageData.deleteUserInput);
            const addUserButton = new Button(dialogPageData.addUserButton);
            const deleteUserButton = new Button(dialogPageData.deleteUserButton);
            const template = `
      <div class="chats">
        <div class="chats__lside">
          <div class="chats__lside-head">
            <div class="chats__links">
              <button class="btn btn_add-chat" type="button" data-toggle-id="addChatModal">
                Новый чат
              </button>

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
          <p>Выберите чат чтобы отправить сообщение</p>
        </div>
      </div>

      <div id="addUserModal" class="modal hide">
        <form data-request-name="addUserToChat" data-redirect-to="/dialog" class="form form_modal">
          <div class="form__top">
            <h2 class="h3">Добавить пользователя</h2>
          </div>

          <div class="form__bottom">
            <input class="hidden-chat-id" type="hidden" name="chatId" value="">
            ${addUserInput.render()}
            ${addUserButton.render()}
          </div>
        </form>
      </div>

      <div id="deleteUserModal" class="modal hide">
        <form data-request-name="deleteUserFromChat" data-redirect-to="/dialog" class="form form_modal">
          <div class="form__top">
            <h2 class="h3">Удалить пользователя</h2>
          </div>

          <div class="form__bottom">
            <input class="hidden-chat-id" type="hidden" name="chatId" value="">
            ${deleteUserInput.render()}
            ${deleteUserButton.render()}
            </div>
        </form>
      </div>

      <div id="addChatModal" class="modal hide">
        <form data-request-name="createChat" data-redirect-to="/dialog" class="form form_modal">
          <div class="form__top">
            <h2 class="h3">Добавить чат</h2>
          </div>

          <div class="form__bottom">
            ${addChatInput.render()}
            ${addChatButton.render()}
          </div>
        </form>
      </div>

      <div id="deleteChatModal" class="modal hide">
        <form data-request-name="deleteChat" data-redirect-to="/dialog" class="form form_modal">
          <div class="form__top">
            <h2 class="h3">Вы уверены что хотите удалить чат?</h2>
          </div>

          <div class="form__bottom">
            <input class="hidden-chat-id" type="hidden" name="chatId" value="">
            ${cancelDeleteChatButton.render()}
            ${deleteChatButton.render()}
          </div>
        </form>
      </div>
      `;
            const pageTemplate = Handlebars.compile(template);
            return pageTemplate();
        });
    }
    addEvents() {
        toggleElements();
        closeModalOnOutClick();
        addInputsValidation();
        formSubmitHandler();
        addDynamicModal();
    }
}
//# sourceMappingURL=chats.js.map