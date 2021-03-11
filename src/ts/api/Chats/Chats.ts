import { HTTPTransport } from '../HTTPTransport/HTTPTransport'

const host = 'https://ya-praktikum.tech/api/v2/'
interface RequestResult {
  ok: boolean
  status: number
  statusText: string
  data: string
  json: <T>() => T
  headers: string
  response?: [] | string
}
type AddUserData = {
  add_user: number[]
  chatId: number
}
type CreateChatData = {
  title: string
}
export function createChat(data: CreateChatData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${host}/chats`

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

export function getChats() {
  const request = new HTTPTransport()
  const url = `${host}/chats`

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
type DeleteChatData = {
  chatId: number
}

export function deleteChat(data: DeleteChatData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${host}/chats`

  request
    .delete(url, { data: JSON.stringify(data) })
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

export function addUserToChat(data: AddUserData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${host}/chats/users`
  const { add_user, chatId } = data
  const sendData = {
    users: [add_user],
    chatId,
  }

  request
    .put(url, { data: JSON.stringify(sendData) })
    .then((result: RequestResult) => {
      if (result.status === 200) {
        alert('Пользователь добавлен')
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}

type DeleteUserData = {
  remove_user: number
  chatId: number
}
export function deleteUserFromChat(data: DeleteUserData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${host}/chats/users`
  const { remove_user, chatId } = data
  const sendData = {
    users: [remove_user],
    chatId,
  }

  request
    .delete(url, { data: JSON.stringify(sendData) })
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
