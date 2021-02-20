var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventBus } from '../utils/eventBus.js';
export class Block {
    constructor(tagName = 'div', props = {}) {
        this.props = props;
        this.eventBus = new EventBus();
        this.setProps = nextProps => {
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
        };
        this.eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };
        this.props = this._makePropsProxy(props);
        this._registerEvents(this.eventBus);
        this.eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount('');
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount(oldProps) { }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
    }
    componentDidUpdate(oldProps, newProps) {
        this._render();
        return true;
    }
    get element() {
        return this._element;
    }
    _render() {
        const block = this.render();
        this._element.innerHTML = block;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        props = new Proxy(props, {
            set: (target, prop, value) => {
                const oldProps = Object.assign({}, target);
                target[prop] = value;
                this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет прав');
            },
        });
        return props;
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    addEvents() { }
    show() {
        this._element.classList.add('hide');
    }
    hide() {
        this._element.classList.remove('hide');
    }
}
Block.EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
};
//# sourceMappingURL=Block.js.map