import { toggle } from './toggle.js';
export function closeModalOnOutClick() {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            toggle(event.target.id);
        }
    }, false);
}
//# sourceMappingURL=closeModalOnOutClick.js.map