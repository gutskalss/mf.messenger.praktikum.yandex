export function toggle(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.classList.toggle('hide')
  }
}
