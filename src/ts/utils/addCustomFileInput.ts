function customFileInput(fileInputs: NodeListOf<Element>) {
  for (const fileInput of Array.from(fileInputs)) {
    const fileInputParent = fileInput.parentNode as HTMLElement

    fileInputParent.classList.add('addLabel')

    fileInput.addEventListener('change', function (this: HTMLInputElement) {
      const files = []

      for (const file of Array.from(this.files as FileList)) {
        files.push((<File>file).name)
      }

      if (files.length > 0) {
        fileInputParent.classList.remove('addLabel')
      }

      const filesJoined = files.join(', ')

      if (this.parentNode.lastChild.nodeValue) {
        return (this.parentNode.lastChild.nodeValue = filesJoined)
      } else {
        return this.parentNode.appendChild(document.createTextNode(filesJoined))
      }
    })
  }
}

export function addCustomFileInput() {
  customFileInput(document.querySelectorAll('.input_file'))
}
