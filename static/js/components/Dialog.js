import Block from './Block.js';
Handlebars.registerHelper('ifType', function (arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});
const template = Handlebars.compile(`
<div class="dialog__content hide-scrollbar">
  {{#each messagesBlocks}}
    {{#ifType this.type 'date'}}
      <div class="dialog__date">{{this.date}}</div>
    {{/ifType}}

    {{#ifType this.type 'own'}}
      <div class="dialog__messages-container dialog__messages-container_own">
        {{#each this.messages}}
          {{#ifType this.type 'text'}}
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
          {{#ifType this.type 'image'}}
          {{/ifType}}
        {{/each}}
      </div>
    {{/ifType}}

    {{#ifType this.type 'someone'}}
        <div class="dialog__messages-container">
          {{#each this.messages}}
            {{#ifType this.type 'text'}}
              <div class="dialog__message">
                <span class="dialog__message-text">{{this.text}}</span>
                <span class="dialog__message-info">
                  <span class="dialog__message-time">{{this.time}}</span>
                </span>
              </div>
            {{/ifType}}
            {{#ifType this.type 'image'}}
              <div class="dialog__message dialog__message_image">
                <img src="{{this.url}}" alt="{{this.alt}}" />
                <span class="dialog__message-info dialog__message-info_image">
                  <div class="dialog__message-time">{{this.time}}</div>
                </span>
              </div>
            {{/ifType}}
          {{/each}}
        </div>
    {{/ifType}}
  {{/each}}
</div>
`);
export default class Dialog extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        return template(this.props);
    }
}
//# sourceMappingURL=Dialog.js.map