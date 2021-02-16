import { signin, signup, logout } from '../index.js'

function sendRequest(
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
    default:
  }
}

export { sendRequest }
