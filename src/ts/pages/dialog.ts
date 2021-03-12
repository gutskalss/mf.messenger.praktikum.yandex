import { Block } from '../components/Block'
import { DialogPageData } from '../UIData/DialogPage'
import { Input } from '../components/Input'
import { ChatsList } from '../components/ChatsList'
import { Button } from '../components/Button'
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick'
import { toggleElements } from '../utils/toggleElements'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler'
import { addDynamicModal } from '../utils/addDynamicModal'
import { addDialogs } from '../api/index'

import { getChats } from '../api/index'

const Handlebars = require('handlebars')

type ChatData = {
  avatar: {
    link: string
    alt: string
  }
  name?: string
  own: boolean
  lastMessage: string
  time: string
  unreaded: number
  active: boolean
}

export class DialogPage extends Block {
  async render() {
    const dialogPageData = DialogPageData()
    const chats = await getChats()
    const chatItemTemplate = dialogPageData.chatsItem

    const chatsRenderData = chats.reduce(
      (acc: ChatData[], item: { title: string; id: number }) => {
        const { title, id } = item
        const readyItem = {
          ...chatItemTemplate,
          title,
          id,
        }

        acc = [...acc, readyItem]

        return acc
      },
      []
    )

    const searchInput = new Input(dialogPageData.searchInput)
    const chatsList = new ChatsList({ chats: chatsRenderData })

    // const settingsButton = new Button(dialogPageData.settingsButton)
    // const settingsButtonsMenu = new ButtonsMenu(
    //   dialogPageData.settingsButtonsMenu
    // )

    const addUserInput = new Input(dialogPageData.addUserInput)
    const deleteUserInput = new Input(dialogPageData.deleteUserInput)
    const addUserButton = new Button(dialogPageData.addUserButton)
    const deleteUserButton = new Button(dialogPageData.deleteUserButton)
    const addChatInput = new Input(dialogPageData.addChatInput)
    const addChatButton = new Button(dialogPageData.addChatButton)
    const cancelDeleteChatButton = new Button(
      dialogPageData.cancelDeleteChatButton
    )
    const deleteChatButton = new Button(dialogPageData.deleteChatButton)

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
    `

    const pageTemplate = Handlebars.compile(template)
    return pageTemplate()
  }

  async addEvents() {
    toggleElements()
    closeModalOnOutClick()
    addInputsValidation()
    formSubmitHandler()
    addDynamicModal()
    addDialogs()
  }
}
