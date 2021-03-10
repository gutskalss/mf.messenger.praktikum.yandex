import { toggle } from './toggle'

export function toggleElements() {
  document.querySelectorAll('[data-toggle-id]').forEach((item: HTMLElement) => {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      const element = event.currentTarget as HTMLElement
      toggle(element.dataset.toggleId as string)
    })
  })
}
