import { Block } from './Block.js';
const imageBaseURL = 'https://ya-praktikum.tech/';
const template = Handlebars.compile(`
<div data-toggle-id="changeAvatarModal" class="profile__avatar">
  {{#if profileAvatarURL}}
  <img src="${imageBaseURL}{{profileAvatarURL}}" alt="#">
  {{else}}
    <i class="fas fa-camera"></i>
  {{/if}}
</div>
`);
export class ProfileAvatar extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return template(this.props);
    }
}
//# sourceMappingURL=ProfileAvatar.js.map