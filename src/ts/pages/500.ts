import { ErrorPageData } from '../UIData/ErrorPage.js'
import { Block } from '../components/Block.js'
import { ErrorMessage } from '../components/ErrorMessage.js'

const errorPageData = ErrorPageData()

const errorMessageTemplate = new ErrorMessage(errorPageData.page500)

const template = errorMessageTemplate.render()

const pageTemplate = Handlebars.compile(template)

class Error500Page extends Block {
  render() {
    return pageTemplate()
  }
}

export { Error500Page }
