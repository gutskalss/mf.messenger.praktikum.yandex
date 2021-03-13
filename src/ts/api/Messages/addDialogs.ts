import { Dialog } from '../../components/Dialog'
import { DialogPageData } from '../../UIData/DialogPage'

import { getUserInfo, getChatToken, getChats } from '../index'

const dialogPageData = DialogPageData()

// type ChatItem = {
//   id: number
//   title: string
//   created_by: number
//   avatar: string | null
// }

export async function addDialogs() {
  const { id: userId } = await getUserInfo()
  const chats = await getChats()

  async function renderDialog(event: Event) {
    event.preventDefault()
    const dialogContainer = document.querySelector('.chats__rside')
    const element = event.currentTarget as HTMLElement
    const chatId: string = element.dataset.selectChat!
    const currentChat: ChatItem = chats.find(
      (item: ChatItem) => item.id === parseInt(chatId)
    )
    const { token: chatToken } = await getChatToken(chatId)

    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${chatToken}`
    )

    socket.addEventListener('open', () => {
      console.log('Соединение установлено')

      socket.send(
        JSON.stringify({
          content: '0',
          type: 'get old',
        })
      )
    })

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто')
      } else {
        console.log('Обрыв соединения')
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`)
    })

    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)

      if (Array.isArray(message)) {
        const messageTemplate = dialogPageData.message
        const messagesBlocks = message.reduce((acc, item) => {
          const resultMessage = { ...messageTemplate }

          const date = new Date(item.time)

          if (item.user_id !== userId) {
            resultMessage.type = 'someone'
          }

          if (item.content) {
            resultMessage.text = item.content
            resultMessage.time = `${date.getHours()}:${date.getMinutes()}`

            acc.push(resultMessage)
          }

          return acc
        }, [])

        const dialog = new Dialog({
          messagesBlocks,
          chat: currentChat,
        })

        dialogContainer!.innerHTML = dialog.render()

        const formSendMessage = document.getElementById('sendMessage')!

        formSendMessage.addEventListener('submit', (event: Event) => {
          event.preventDefault()
          const messageValue = document.getElementById(
            'message'
          ) as HTMLInputElement
          const message = messageValue.value as string

          socket.send(
            JSON.stringify({
              content: message,
              type: 'message',
            })
          )

          messageValue.value = ''
        })
      }

      if (message.type === 'message') {
        const dialogContainer = document.querySelector('.dialog__content')
        const newMessageTemplate = () => {
          if (message.userId === userId) {
            return `
              <div class="dialog__messages-container dialog__messages-container_own">
                <div class="dialog__message dialog__message_own">
                  ${message.content}
                  <span class="dialog__message-info">
                      <span class="dialog__message-status">
                        <img src="./img/status-read.svg" alt="">
                      </span>
                    <span class="dialog__message-time">15:22</span>
                  </span>
                </div>
              </div>
            `
          } else {
            return `
              <div class="dialog__messages-container">
                  <div class="dialog__message">
                    <span class="dialog__message-text">${message.content}</span>
                    <span class="dialog__message-info">
                      <span class="dialog__message-time">2:56</span>
                    </span>
                  </div>
              </div>
            `
          }
        }
        const newMessage = document.createElement('DIV')
        newMessage.innerHTML = newMessageTemplate()

        dialogContainer?.insertBefore(newMessage, dialogContainer.firstChild)
        console.log(message)
      }
    })

    socket.addEventListener('error', (event: ErrorEvent) => {
      console.log('Ошибка', event.message as string)
    })
  }

  document
    .querySelectorAll('[data-select-chat')
    .forEach((item: HTMLElement) => {
      item.addEventListener('click', (event) => renderDialog(event))
    })
}
