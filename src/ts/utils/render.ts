export function render(query: string, block: string) {
  const root = document.querySelector(query) as HTMLTemplateElement
  root.innerHTML = block

  return root
}
