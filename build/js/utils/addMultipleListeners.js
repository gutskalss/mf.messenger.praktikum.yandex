export function addMultipleListeners(element, events, handler) {
    events.forEach(event => {
        element.addEventListener(event, handler);
    });
}
//# sourceMappingURL=addMultipleListeners.js.map