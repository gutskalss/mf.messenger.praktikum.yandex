import { Block } from './Block.js';
import { Input } from './Input.js';
import { Button } from './Button.js';
import { ProfileData } from '../UIData/Profile.js';
const { changeAvatar } = ProfileData();
const inputTemplate = new Input(changeAvatar.input);
const buttonTemplate = new Button(changeAvatar.button);
const changeAvatarTemplate = Handlebars.compile(`
<div id="changeAvatarModal" class="modal hide">
  <form action="#" class="form form_modal">
    <h3 class="h3">Загрузите файл</h3>
    <h3 class="h3 h3_error hide">Ошибка, попробуйте ещё раз</h3>

    ${inputTemplate.render()}

    ${buttonTemplate.render()}

  </form>
</div>
`);
class ChangeAvatarModal extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return changeAvatarTemplate();
    }
}
export { ChangeAvatarModal };
//# sourceMappingURL=ChangeAvatarModal.js.map