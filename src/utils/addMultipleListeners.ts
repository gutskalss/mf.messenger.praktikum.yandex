export default function addMultipleListeners(
  element: HTMLElement,
  events: string[],
  handler: (event: Event) => void
) {
  events.forEach(event => {
    element.addEventListener(event, handler)
  })
}
