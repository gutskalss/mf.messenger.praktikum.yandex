function render(query, block) {
  const root = document.querySelector(query)
  root.innerHTML = block
  return root
}

export default render
