import { Block, ComponentProps } from './Block'

const Handlebars = require('handlebars')

const host = 'https://ya-praktikum.tech/'

const template = Handlebars.compile(`
<div data-toggle-id="changeAvatarModal" class="profile__avatar">
  {{#if profileAvatarURL}}
  <img src="${host}{{profileAvatarURL}}" alt="#">
  {{else}}
    <i class="fas fa-camera"></i>
  {{/if}}
</div>
`)

export class ProfileAvatar extends Block {
  constructor(public props: ComponentProps) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
