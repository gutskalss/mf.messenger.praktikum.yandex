function customFileInput(fileInputs) {
    for (const fileInput of Array.from(fileInputs)) {
        const fileInputParent = fileInput.parentNode;
        fileInputParent.classList.add('addLabel');
        fileInput.addEventListener('change', function () {
            const files = [];
            for (const file of Array.from(this.files)) {
                files.push(file.name);
            }
            if (files.length > 0) {
                ;
                fileInputParent.classList.remove('addLabel');
            }
            if (this.parentNode.lastChild.nodeValue) {
                return (this.parentNode.lastChild.nodeValue = files.join(', '));
            }
            else {
                return this.parentNode.appendChild(document.createTextNode(files.join(', ')));
            }
        });
    }
}
function addCustomFileInput() {
    customFileInput(document.querySelectorAll('.input_file'));
}
export { addCustomFileInput };
//# sourceMappingURL=addCustomFileInput.js.map