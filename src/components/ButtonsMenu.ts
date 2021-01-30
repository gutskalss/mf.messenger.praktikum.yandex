import Block, { ComponentProps } from './Block.js'
import { templateString as buttonTemplateString } from './Button.js'

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
`)

export default class ButtonsMenu extends Block {
  constructor(public props: ComponentProps) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
