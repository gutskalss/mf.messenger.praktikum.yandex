import { toggle } from './toggle.js';
function closeModalOnOutClick() {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            toggle(event.target.id);
        }
    }, false);
}
export { closeModalOnOutClick };
//# sourceMappingURL=closeModalOnOutClick.js.map