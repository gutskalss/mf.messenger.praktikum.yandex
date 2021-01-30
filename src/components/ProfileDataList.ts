import Block from './Block.js'

const template = Handlebars.compile(`
<ul class="profile__list">
  {{#each profileData}}
    <li class="profile__list-item">
      <div class="profile__data-item">{{this.label}}</div>
      <div class="profile__data-value">{{this.value}}</div>
    </li>
  {{/each}}
</ul>
`)

export default class ProfileDataList extends Block {
  constructor(props) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
