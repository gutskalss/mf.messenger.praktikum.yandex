export function addDynamicModal() {
    document
        .querySelectorAll('[data-dynamic-modal')
        .forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const element = event.currentTarget;
            const chatId = element.dataset.chatId;
            const modalId = `#${element.dataset.toggleId}`;
            const modal = document.querySelector(modalId);
            modal.querySelector('.hidden-chat-id').value = chatId;
        });
    });
}
//# sourceMappingURL=addDynamicModal.js.map