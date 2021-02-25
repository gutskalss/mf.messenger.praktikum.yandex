import { Block } from "./Block.js";
import { templateString as buttonTemplateString } from "./Button.js";
const template = Handlebars.compile(`
<ul
  id="{{id}}"
  class="{{classList}}"
>
  {{#each buttons}}
    <li class="toggle-menu__item">
      ${buttonTemplateString}
    </li>
  {{/each}}
</ul>
`);
export class ButtonsMenu extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return template(this.props);
    }
}
//# sourceMappingURL=ButtonsMenu.js.map