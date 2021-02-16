import { Block } from './Block.js';
const template = Handlebars.compile(`
<div data-toggle-id="changeAvatarModal" class="profile__avatar">
  <i class="fas fa-camera"></i>
</div>
`);
class ProfileAvatar extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return template();
    }
}
export { ProfileAvatar };
//# sourceMappingURL=ProfileAvatar.js.map