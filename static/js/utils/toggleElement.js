export default function toggle(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hide');
    }
}
document.querySelectorAll('[data-toggle-id]').forEach((item) => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const element = event.currentTarget;
        toggle(element.dataset.toggleId);
    });
});
//# sourceMappingURL=toggleElement.js.map