import Block, { ComponentProps } from './Block.js'
import Input from './Input.js'
import Button from './Button.js'
import ProfileData from '../services/ProfileData.js'

const { changeAvatar } = ProfileData()

const inputTemplate = new Input(changeAvatar.input)
const buttonTemplate = new Button(changeAvatar.button)

const changeAvatarTemplate = Handlebars.compile(`
<div id="changeAvatarModal" class="modal hide">
  <form action="#" class="form form_modal">
    <h3 class="h3">Загрузите файл</h3>
    <h3 class="h3 h3_error hide">Ошибка, попробуйте ещё раз</h3>

    ${inputTemplate.render()}

    ${buttonTemplate.render()}

  </form>
</div>
`)

export default class ChangeAvatarModal extends Block {
  constructor(public props: ComponentProps) {
    super('div', props)
  }

  render() {
    return changeAvatarTemplate()
  }
}
