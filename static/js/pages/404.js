import render from '../utils/render.js';
import ErrorPageData from '../services/ErrorPageData.js';
import ErrorMessage from '../components/ErrorMessage.js';
const errorPageData = ErrorPageData();
const errorMessageTemplate = new ErrorMessage(errorPageData.page404);
render('#root', errorMessageTemplate.render());
//# sourceMappingURL=404.js.map