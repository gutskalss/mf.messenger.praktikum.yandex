import { ErrorPageData } from '../UIData/ErrorPage.js'
import { Block } from '../components/Block.js'
import { ErrorMessage } from '../components/ErrorMessage.js'

const errorPageData = ErrorPageData()

const errorMessageTemplate = new ErrorMessage(errorPageData.page404)

const template = errorMessageTemplate.render()

const pageTemplate = Handlebars.compile(template)

export class Error404Page extends Block {
  render() {
    return pageTemplate()
  }
}
