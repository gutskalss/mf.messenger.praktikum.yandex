import { Block } from "./Block.js";
export const templateString = `
<button
  {{#if dataToggleId}}
    data-toggle-id="{{dataToggleId}}"
  {{/if}}
  class="{{classList}}"
  type="{{type}}"
  value="{{value}}"
>
  {{#if iconClassList}}
    <i class="{{iconClassList}}"></i>
  {{/if}}

  {{text}}
</button>
`;
const template = Handlebars.compile(templateString);
const sidebarTemplate = Handlebars.compile(`
<button onclick="window.location.href='{{backLink}}'" class="btn btn_left-bar">
  <div class="btn btn_blue btn_round">
    <i class="fas fa-arrow-left"></i>
  </div>
</button>
`);
export class Button extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        switch (this.props.template) {
            case 'sidebar':
                return sidebarTemplate(this.props);
            default:
                return template(this.props);
        }
    }
}
//# sourceMappingURL=Button.js.map