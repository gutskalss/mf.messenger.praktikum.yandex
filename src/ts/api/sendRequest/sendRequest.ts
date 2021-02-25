import {
  signin,
  signup,
  logout,
  changeUserProfile,
  changeUserPassword,
  changeUserAvatar,
  createChat,
  deleteChat,
  addUserToChat,
  deleteUserFromChat,
} from '../index'

export function sendRequest(
  requestName: string,
  data: object,
  redirectURL: string
): void {
  switch (requestName) {
    case 'signin':
      signin(data, redirectURL)
      break
    case 'signup':
      signup(data, redirectURL)
      break
    case 'logout':
      logout(redirectURL)
      break
    case 'changeUserProfile':
      changeUserProfile(data, redirectURL)
      break
    case 'changeUserPassword':
      changeUserPassword(data, redirectURL)
      break
    case 'changeUserAvatar':
      changeUserAvatar(data, redirectURL)
      break
    case 'createChat':
      createChat(data, redirectURL)
      break
    case 'deleteChat':
      deleteChat(data, redirectURL)
      break
    case 'addUserToChat':
      addUserToChat(data, redirectURL)
      break
    case 'deleteUserFromChat':
      deleteUserFromChat(data, redirectURL)
      break
    default:
  }
}
