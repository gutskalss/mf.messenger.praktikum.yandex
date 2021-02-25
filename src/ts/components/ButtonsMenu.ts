import { Block, ComponentProps } from './Block'
import { templateString as buttonTemplateString } from './Button'

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

export class ButtonsMenu extends Block {
  constructor(public props: ComponentProps) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
