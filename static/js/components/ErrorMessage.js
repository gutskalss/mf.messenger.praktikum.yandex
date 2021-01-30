import Block from './Block.js';
const template = Handlebars.compile(`
<div class="error-page">
  <div class="error-page__title">
    <h1 class="h1">{{errorNumber}}</h1>
    <h2 class="h2">{{errorMessage}}</h2>
  </div>
  <a href="/chats.html" class="link">Назад к чатам</a>
</div>
`);
export default class ErrorMessage extends Block {
    constructor(props) {
        super('div', props);
        this.props = props;
    }
    render() {
        return template(this.props);
    }
}
//# sourceMappingURL=ErrorMessage.js.map