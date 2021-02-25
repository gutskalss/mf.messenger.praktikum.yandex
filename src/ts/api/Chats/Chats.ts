import { HTTPTransport } from '../HTTPTransport/HTTPTransport'

const baseURL = 'https://ya-praktikum.tech/api/v2/'

export function createChat(data, redirectURL) {
  const request = new HTTPTransport()
  const url = `${baseURL}/chats`

  request
    .post(url, { data: JSON.stringify(data) })
    .then(result => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const reason = JSON.parse(result.response).reason
        alert(reason)
      }
    })
    .catch(err => console.error(err))
}

export function getChats() {
  const request = new HTTPTransport()
  const url = `${baseURL}/chats`

  return request
    .get(url)
    .then(result => {
      if (result.status === 200) {
        return JSON.parse(result.response)
      } else {
        const reason = JSON.parse(result.response).reason
        alert(reason)
      }
    })
    .catch(err => console.error(err))
}

export function deleteChat(data, redirectURL) {
  const request = new HTTPTransport()
  const url = `${baseURL}/chats`

  request
    .delete(url, { data: JSON.stringify(data) })
    .then(result => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const reason = JSON.parse(result.response).reason
        alert(reason)
      }
    })
    .catch(err => console.error(err))
}

export function addUserToChat(data, redirectURL) {
  const request = new HTTPTransport()
  const url = `${baseURL}/chats/users`
  const { add_user, chatId } = data
  const sendData = {
    users: [add_user],
    chatId,
  }

  request
    .put(url, { data: JSON.stringify(sendData) })
    .then(result => {
      if (result.status === 200) {
        alert('Пользователь добавлен')
        window.location.href = redirectURL
      } else {
        const reason = JSON.parse(result.response).reason
        alert(reason)
      }
    })
    .catch(err => console.error(err))
}

export function deleteUserFromChat(data, redirectURL) {
  const request = new HTTPTransport()
  const url = `${baseURL}/chats/users`
  const { remove_user, chatId } = data
  const sendData = {
    users: [remove_user],
    chatId,
  }

  request
    .delete(url, { data: JSON.stringify(sendData) })
    .then(result => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const reason = JSON.parse(result.response).reason
        alert(reason)
      }
    })
    .catch(err => console.error(err))
}
