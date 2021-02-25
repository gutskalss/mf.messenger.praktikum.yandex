import { ErrorPageData } from '../UIData/ErrorPage'
import { Block } from '../components/Block'
import { ErrorMessage } from '../components/ErrorMessage'

const errorPageData = ErrorPageData()

const errorMessageTemplate = new ErrorMessage(errorPageData.page500)

const template = errorMessageTemplate.render()

const pageTemplate = Handlebars.compile(template)

export class Error500Page extends Block {
  render() {
    return pageTemplate()
  }
}
