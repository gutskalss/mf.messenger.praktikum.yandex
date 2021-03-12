import { Block, ComponentProps } from './Block'
import { ButtonsMenu } from '../components/ButtonsMenu'
import { DialogPageData } from '../UIData/DialogPage'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

const Handlebars = require('handlebars')

const dialogPageData = DialogPageData()

const attachMethodsMenu = new ButtonsMenu(dialogPageData.attachMethodsMenu)
const attachMethodsButton = new Button(dialogPageData.attachMethodsButton)
const sendMessageButton = new Button(dialogPageData.sendMessageButton)
const sendMessageInput = new Input(dialogPageData.sendMessageInput)

type ChatItem = {
  id: number
  title: string
  created_by: number
  avatar: string | null
}

type MessageDialog = {
  messagesBlocks: {
    type: string
    date?: undefined | string
    messages?:
      | {
          type?: string | undefined
          url?: string | undefined
          alt?: string | undefined
          time?: string | undefined
          read?: boolean
          text?: undefined | string
        }[]
      | undefined
  }[]
  chat: ChatItem
}

Handlebars.registerHelper(
  'ifType',
  function (arg1: string, arg2: string, options: any) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this)
  }
)

const template = Handlebars.compile(`
<div class="dialog">
  <div class="dialog__top-bar">
    <div class="dialog__title">
      <div class="dialog__avatar">
        <img />
      </div>
      <div class="dialog__name">{{chat.title}}</div>
    </div>
  </div>

  <div class="dialog__content hide-scrollbar">
    {{#each messagesBlocks}}
      {{#ifType this.type 'date'}}
        <div class="dialog__date">{{this.date}}</div>
      {{/ifType}}

      {{#ifType this.type 'own'}}
        <div class="dialog__messages-container dialog__messages-container_own">
          
            {{#ifType this.contentType 'text'}}
              <div class="dialog__message dialog__message_own">
                {{this.text}}
                <span class="dialog__message-info">
                  {{#if this.read}}
                    <span class="dialog__message-status">
                      <img src="./img/status-read.svg" alt="" />
                    </span>
                  {{/if}}
                  <span class="dialog__message-time">{{this.time}}</span>
                </span>
              </div>
            {{/ifType}}
            {{#ifType this.contentType 'image'}}
            {{/ifType}}
          
        </div>
      {{/ifType}}

      {{#ifType this.type 'someone'}}
          <div class="dialog__messages-container">
            
              {{#ifType this.contentType 'text'}}
                <div class="dialog__message">
                  <span class="dialog__message-text">{{this.text}}</span>
                  <span class="dialog__message-info">
                    <span class="dialog__message-time">{{this.time}}</span>
                  </span>
                </div>
              {{/ifType}}
              {{#ifType this.contentType 'image'}}
                <div class="dialog__message dialog__message_image">
                  <img src="{{this.url}}" alt="{{this.alt}}" />
                  <span class="dialog__message-info dialog__message-info_image">
                    <div class="dialog__message-time">{{this.time}}</div>
                  </span>
                </div>
              {{/ifType}}
            
          </div>
      {{/ifType}}
    {{/each}}
  </div>

  <div class="dialog__bottom-bar">
    <form id="sendMessage" class="dialog__create-message-form" data-chat-id="{{chat.id}}">
      ${attachMethodsMenu.render()}
      ${attachMethodsButton.render()}
      <div class="dialog__new-message-input">
        ${sendMessageInput.render()}
      </div>
      ${sendMessageButton.render()}
    </form>
  </div>
</div>


`)

export class Dialog extends Block {
  constructor(public props: ComponentProps | MessageDialog) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
