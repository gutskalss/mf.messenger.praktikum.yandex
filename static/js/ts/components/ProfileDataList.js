import { Block } from './Block.js';
const template = Handlebars.compile(`
<ul class="profile__list">
  {{#each profileData}}
    <li class="profile__list-item">
      <div class="profile__data-item">{{this.label}}</div>
      <div class="profile__data-value">{{this.value}}</div>
    </li>
  {{/each}}
</ul>
`);
class ProfileDataList extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return template(this.props);
    }
}
export { ProfileDataList };
//# sourceMappingURL=ProfileDataList.js.map