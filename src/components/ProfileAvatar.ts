import Block, { ComponentProps } from './Block.js'

const template = Handlebars.compile(`
<div data-toggle-id="changeAvatarModal" class="profile__avatar">
  <i class="fas fa-camera"></i>
</div>
`)

export default class ProfileAvatar extends Block {
  constructor(public props: ComponentProps) {
    super('div', props)
  }

  render() {
    return template()
  }
}
