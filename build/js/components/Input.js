import { Block } from "./Block.js";
const template = Handlebars.compile(`
{{#if inputs}}
  {{#each inputs}}
    <label for="{{this.name}}" class="label">
      <input
        id="{{this.id}}"
        name="{{this.name}}"
        class="{{this.classList}}"
        type="{{this.type}}"
        placeholder="{{this.placeholder}}"
        {{#if dataValidate}}
          data-validate="{{dataValidate}}"
        {{/if}}
       
      />
      <span class="label__text">{{this.label}}</span>
      <span class="input__error hide">{{this.errorMessage}}</span>
    </label>
  {{/each}}
{{else}}
  <label for="{{this.name}}" class="label">
  <input
    id="{{this.id}}"
    name="{{this.name}}"
    class="{{this.classList}}"
    type="{{this.type}}"
    placeholder="{{this.placeholder}}"
  />
  <span class="label__text">{{this.label}}</span>
  <span class="input__error hide">{{this.errorMessage}}</span>
  </label>
{{/if}}
`);
const profileTemplate = Handlebars.compile(`
<ul class="profile__list">
  {{#each inputs}}
    <li class="profile__list-item">
      <label for="{{this.name}}" class="profile__data-item">
        {{this.label}}
      </label>
      <div class="profile__data-value">
        <input
          type="{{this.type}}"
          class="input_profile-edit"
          value="{{this.value}}"
          id="{{this.id}}"
          name="{{this.name}}"
        />
      </div>
    </li>
  {{/each}}
</ul>
`);
const fileTemplate = Handlebars.compile(`
<label for="{{name}}" class="label_file-input addLabel">
  <input class="input_file" type="file" name="{{name}}" id="{{name}}" />
</label>
`);
const searchTemplate = Handlebars.compile(`
<label class="label label_chats-search">
  <input
    class="input input_chats-search"
    type="text"
    placeholder=" "
  />
  <span class="label__text label__text_chats-search">
    <i class="fas fa-search"></i>
    <div class="onfocus-hide">{{label}}</div>
  </span>
</label>
`);
const cleanTemplate = Handlebars.compile(`
<input
  class="{{classList}}"
  placeholder="{{placeholder}}"
  type="{{type}}"
  id="{{id}}"
  name="{{name}}"
/>
`);
export class Input extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        switch (this.props.template) {
            case 'file':
                return fileTemplate(this.props);
            case 'profile':
                return profileTemplate(this.props);
            case 'search':
                return searchTemplate(this.props);
            case 'clean':
                return cleanTemplate(this.props);
            default:
                return template(this.props);
        }
    }
}
//# sourceMappingURL=Input.js.map