import toggle from './toggleElement.js'

// Закрыть модальное окно по клику вне окна
document.addEventListener(
  'click',
  function (event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      toggle((<HTMLElement>event.target).id)
    }
  },
  false
)
