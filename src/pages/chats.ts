import render from '../utils/render.js'
import DialogPageData from '../services/DialogPageData.js'
import Input from '../components/Input.js'
import ChatsList from '../components/ChatsList.js'
import Button from '../components/Button.js'

const dialogPageData = DialogPageData()

const searchInput = new Input(dialogPageData.searchInput)
const chatsList = new ChatsList({ chats: dialogPageData.chatsList })

const cancelDeleteChatButton = new Button(dialogPageData.cancelDeleteChatButton)
const deleteChatButton = new Button(dialogPageData.deleteChatButton)

const template = `
<div class="chats">
  <div class="chats__lside">
    <div class="chats__lside-head">
      <div class="chats__profile-link-container">
        <a class="chats__profile-link" href="/profile.html">
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
`

const pageTemplate = Handlebars.compile(template)

render('#root', pageTemplate())
