function customFileInput(fileInputs: NodeListOf<Element>) {
  for (const fileInput of Array.from(fileInputs)) {
    const fileInputParent: (Node & ParentNode) | null = fileInput.parentNode
    ;(<HTMLElement>fileInputParent).classList.add('addLabel')

    fileInput.addEventListener('change', function (this: HTMLInputElement) {
      const files = []
      for (const file of Array.from(this.files as FileList)) {
        files.push((<File>file).name)
      }

      if (files.length > 0) {
        ;(<HTMLElement>fileInputParent).classList.remove('addLabel')
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

customFileInput(document.querySelectorAll('.input_file'))
