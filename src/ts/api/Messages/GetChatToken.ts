import { HTTPTransport } from '../HTTPTransport/HTTPTransport'

const host = 'https://ya-praktikum.tech/api/v2'

interface RequestResult {
  ok: boolean
  status: number
  statusText: string
  data: string
  json: <T>() => T
  headers: string
  response?: [] | string | undefined
}

export function getChatToken(chatId: string) {
  const request = new HTTPTransport()
  const url = `${host}/chats/token/${chatId}`
  const headers = {
    mode: 'cors',
    credentials: 'include',
  }

  return request
    .post(url, { headers })
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
