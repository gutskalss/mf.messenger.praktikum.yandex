import { toggle } from "./toggle.js";
export function toggleElements() {
    document.querySelectorAll('[data-toggle-id]').forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const element = event.currentTarget;
            toggle(element.dataset.toggleId);
        });
    });
}
//# sourceMappingURL=toggleElements.js.map