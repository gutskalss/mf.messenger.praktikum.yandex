export function addDynamicModal() {
  document
    .querySelectorAll('[data-dynamic-modal')
    .forEach((item: HTMLElement) => {
      item.addEventListener('click', function (event) {
        event.preventDefault()
        const element = event.currentTarget as HTMLElement
        const chatId = element.dataset.chatId
        const modalId = `#${element.dataset.toggleId}`
        const modal = document.querySelector(modalId)
        modal.querySelector('.hidden-chat-id').value = chatId
      })
    })
}
