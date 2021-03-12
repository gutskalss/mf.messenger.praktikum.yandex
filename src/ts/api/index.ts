export { HTTPTransport } from './HTTPTransport/HTTPTransport'
export { sendRequest } from './sendRequest/sendRequest'
export { signin, signup, logout, getUserInfo } from './Auth/Auth'
export { getChatToken } from './Messages/GetChatToken'
export { addDialogs } from './Messages/addDialogs'
export {
  changeUserProfile,
  changeUserPassword,
  changeUserAvatar,
} from './User/User'
export {
  createChat,
  getChats,
  deleteChat,
  addUserToChat,
  deleteUserFromChat,
} from './Chats/Chats'
