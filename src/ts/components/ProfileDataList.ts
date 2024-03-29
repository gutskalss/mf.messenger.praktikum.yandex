import { Block } from './Block'

const Handlebars = require('handlebars')

const template = Handlebars.compile(`
<ul class="profile__list">
  {{#each profileDataList}}
    <li class="profile__list-item">
      <div class="profile__data-item">{{this.label}}</div>
      <div class="profile__data-value">{{this.value}}</div>
    </li>
  {{/each}}
</ul>
`)

export class ProfileDataList extends Block {
  constructor(public props = {}) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
