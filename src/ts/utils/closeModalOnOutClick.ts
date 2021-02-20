import { toggle } from './toggle.js'

export function closeModalOnOutClick() {
  document.addEventListener(
    'click',
    function (event: MouseEvent) {
      if ((<HTMLElement>event.target).classList.contains('modal')) {
        toggle((<HTMLElement>event.target).id)
      }
    },
    false
  )
}
