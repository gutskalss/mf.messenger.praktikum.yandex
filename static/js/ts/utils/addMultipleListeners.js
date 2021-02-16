function addMultipleListeners(element, events, handler) {
    events.forEach(event => {
        element.addEventListener(event, handler);
    });
}
export { addMultipleListeners };
//# sourceMappingURL=addMultipleListeners.js.map