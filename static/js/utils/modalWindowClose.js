import toggle from './toggleElement.js';
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        toggle(event.target.id);
    }
}, false);
//# sourceMappingURL=modalWindowClose.js.map