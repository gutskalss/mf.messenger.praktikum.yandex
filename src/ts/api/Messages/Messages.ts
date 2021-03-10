// import { EventBus } from '../core/event-bus'

interface Message {
  userId?: number
  user_id?: number
  chat_id: number
  content: string
  time: string
  id: number
}

export class WebSocketClass {
  socket: WebSocket
  messageArray: Message[] | undefined
  constructor(userId: string, chatId: string, token: string) {
    this.messageArray = undefined
    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
    )

    this.socket.addEventListener('open', async () => {
      try {
        console.log('Соединение установлено')
        await this.socket.send(
          JSON.stringify({
            content: '0',
            type: 'get old',
          })
        )
      } catch (e) {
        throw new Error(e)
      }
    })
    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто')
      } else {
        console.log('Обрыв соединения')
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`)
    })

    this.socket.addEventListener('message', (event) => {
      console.log('Получены данные', event.data)
      if (event.data && event.data.length > 0) {
        if (JSON.parse(event.data).length) {
          this.messageArray = [...JSON.parse(event.data)]
        } else {
          this.messageArray?.push(JSON.parse(event.data))
        }

        return JSON.parse(event.data)
      }
    })

    this.socket.addEventListener('error', (event: Event) => {
      console.log('Ошибка', event)
    })
  }

  sendMessage = async (contentMessage: string) => {
    try {
      await this.socket.send(
        JSON.stringify({
          content: contentMessage,
          type: 'message',
        })
      )
      const messageEvent = new Event('message')
      await this.socket.dispatchEvent(messageEvent)
    } catch (e) {
      throw new Error(e)
    }
  }

  getMessages = async () => {
    try {
      const messageEvent = new Event('message')
      await this.socket.dispatchEvent(messageEvent)

      return this.messageArray
    } catch (e) {
      throw new Error(e)
    }
  }

  closeSteam = () => {
    const closeEvent = new Event('close')
    this.socket.dispatchEvent(closeEvent)
  }
}
