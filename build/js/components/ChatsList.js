import { Block } from "./Block.js";
const template = Handlebars.compile(`
<ul class="chats-list hide-scrollbar">
  {{#each chats}}
    <li class="chat-item">
      <div class="chat-item__content {{#if active}}chat-item__content_active{{/if}}">
        <div class="chat-item__logo">
          <img src="{{avatar.link}}" alt="{{avatar.alt}}" />
        </div>
        <div class="chat-item__text">
          <span class="chat-item__title">{{title}}</span>
          <p class="chat-item__last-message">
            {{#if own}}
              <span class="chat-item__own-message">Вы:</span>
            {{/if}}
            {{lastMessage}}
          </p>
        </div>
        <time class="chat-item__time">{{time}}</time>
        {{#if unreaded}}
          <div class="chat-item__new-messages">{{unreaded}}</div>
        {{/if}}
        
        <div class="chat-item__hover-btns">
          <button
            data-toggle-id="addUserModal"
            data-dynamic-modal="true"
            data-chat-id="{{id}}"
            class="btn btn_user-add"
          >
            <i class="fas fa-user-plus"></i>
          </button>

          <button
            data-toggle-id="deleteUserModal"
            data-dynamic-modal="true"
            data-chat-id="{{id}}"
            class="btn btn_user-delete"
          >
            <i class="fas fa-user-times"></i>
          </button>

          <button
            data-toggle-id="deleteChatModal"
            data-dynamic-modal="true"
            data-chat-id="{{id}}"
            class="btn btn_chat-delete"
          >
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
        
      </div>
    </li>
  {{/each}}
</ul>
`);
export class ChatsList extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return template(this.props);
    }
}
//# sourceMappingURL=ChatsList.js.map