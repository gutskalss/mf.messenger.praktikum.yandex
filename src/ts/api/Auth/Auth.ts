import { HTTPTransport } from '../HTTPTransport/HTTPTransport'

const baseURL = 'https://ya-praktikum.tech/api/v2/'

interface RequestResult {
  ok: boolean
  status: number
  statusText: string
  data: string
  json: <T>() => T
  headers: string
  response?: [] | string | undefined
}
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

export function signin(data: LoginData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${baseURL}/auth/signin`

  request
    .post(url, { data: JSON.stringify(data) })
    .then((result: RequestResult) => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}

export function signup(data: SignupData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${baseURL}/auth/signup`

  request
    .post(url, { data: JSON.stringify(data) })
    .then((result: RequestResult) => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}

export function logout(redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${baseURL}/auth/logout`

  request
    .post(url)
    .then((result: RequestResult) => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}

export function getUserInfo() {
  const request = new HTTPTransport()
  const url = `${baseURL}/auth/user`

  return request
    .get(url)
    .then((result: RequestResult) => {
      if (result.status === 200) {
        return JSON.parse(result.response as string)
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}
