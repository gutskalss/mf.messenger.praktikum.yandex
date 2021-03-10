import { ErrorPageData } from '../UIData/ErrorPage'
import { Block } from '../components/Block'
import { ErrorMessage } from '../components/ErrorMessage'

const Handlebars = require('handlebars')

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
const errorPageData = ErrorPageData()

const errorMessageTemplate = new ErrorMessage(
  errorPageData.page404 as ErrorData
)

const template = errorMessageTemplate.render()

const pageTemplate = Handlebars.compile(template)

export class Error404Page extends Block {
  render() {
    return pageTemplate()
  }
}
