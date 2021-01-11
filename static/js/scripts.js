function redirect(url) {
  window.location.href = url
}

function toggle(elementId) {
  const element = document.getElementById(elementId)
  element.classList.toggle('hide')
}

// Закрыть модальное окно по клику вне окна
document.addEventListener(
  'click',
  function (event) {
    if (event.target.classList.contains('modal')) {
      toggle(event.target.id)
    }
  },
  false
)

class customFileInput {
  constructor(fileInputs) {
    for (let fileInput of Array.from(fileInputs)) {
      const fileInputParent = fileInput.parentNode
      fileInputParent.classList.add('addLabel')

      fileInput.addEventListener('change', function () {
        const files = []
        for (let file of Array.from(this.files)) {
          files.push(file.name)
        }

        if (files.length > 0) {
          fileInputParent.classList.remove('addLabel')
        }

        if (this.parentNode.lastChild.nodeValue) {
          return (this.parentNode.lastChild.nodeValue = files.join(', '))
        } else {
          return this.parentNode.appendChild(
            document.createTextNode(files.join(', '))
          )
        }
      })
    }
  }
}

new customFileInput(document.querySelectorAll('.input_file'))

function serialize(form) {
  const serialized = {}

  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i]

    if (
      !field.name ||
      field.disabled ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue

    if (field.type === 'select-multiple') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue

        serialized[field.name][field.options[n]] = field.options[n].value
      }
    } else if (
      (field.type !== 'checkbox' && field.type !== 'radio') ||
      field.checked
    ) {
      serialized[field.name] = field.value
    }
  }

  return serialized
}

document.addEventListener('submit', function (event) {
  event.preventDefault()
  const form = event.target
  const data = serialize(form)
  console.log(data)
})
