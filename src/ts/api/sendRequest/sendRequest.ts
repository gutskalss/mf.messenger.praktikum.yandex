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

type LoginData = {
  login: string
  password: string
}
type SignupData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}
type DeleteUserData = {
  remove_user: number
  chatId: number
}
type ProfileData = {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}
type ChangePasswordData = {
  oldPassword: string
  newPassword: string
}
type CreateChatData = {
  title: string
}
type DeleteChatData = {
  chatId: number
}
type AddUserData = {
  add_user: number[]
  chatId: number
}
export function sendRequest(
  requestName: string,
  data: object,
  redirectURL: string
): void {
  switch (requestName) {
    case 'signin':
      signin(data as LoginData, redirectURL)
      break
    case 'signup':
      signup(data as SignupData, redirectURL)
      break
    case 'logout':
      logout(redirectURL)
      break
    case 'changeUserProfile':
      changeUserProfile(data as ProfileData, redirectURL)
      break
    case 'changeUserPassword':
      changeUserPassword(data as ChangePasswordData, redirectURL)
      break
    case 'changeUserAvatar':
      changeUserAvatar(redirectURL)
      // changeUserAvatar(data, redirectURL)

      break
    case 'createChat':
      createChat(data as CreateChatData, redirectURL)
      break
    case 'deleteChat':
      deleteChat(data as DeleteChatData, redirectURL)
      break
    case 'addUserToChat':
      addUserToChat(data as AddUserData, redirectURL)
      break
    case 'deleteUserFromChat':
      deleteUserFromChat(data as DeleteUserData, redirectURL)
      break
    default:
  }
}
