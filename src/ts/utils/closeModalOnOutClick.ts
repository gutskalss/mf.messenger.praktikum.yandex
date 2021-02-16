import { toggle } from './toggle.js'

// Закрыть модальное окно по клику вне окна
function closeModalOnOutClick() {
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

export { closeModalOnOutClick }
