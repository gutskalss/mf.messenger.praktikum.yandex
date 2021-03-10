import { Block, ComponentProps } from './Block'

const Handlebars = require('handlebars')

const template = Handlebars.compile(`
<div class="error-page">
  <div class="error-page__title">
    <h1 class="h1">{{errorNumber}}</h1>
    <h2 class="h2">{{errorMessage}}</h2>
  </div>
  <a href="/chats.html" class="link">Назад к чатам</a>
</div>
`)

type ErrorData = {
  page500?: {
    errorNumber: string
    errorMessage: string
  }
  page404?: {
    errorNumber: string
    errorMessage: string
  }
}
export class ErrorMessage extends Block {
  constructor(public props: ComponentProps | ErrorData) {
    super('div', props)
  }

  render() {
    return template(this.props)
  }
}
