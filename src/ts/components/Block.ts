import { EventBus } from '../utils/eventBus.js'

interface ComponentProps {
  template?: string
  backLink?: string
  classList?: string
  type?: string
  value?: string
  text?: string
  inputs?: {
    name: string
    value: string
    label: string
    type: string
    id: string
  }[]
  chatsList?: {
    avatar: {
      link: string
      alt: string
    }
    name: string
    own: boolean
    lastMessage: string
    time: string
    unreaded: number
    active: boolean
  }[]
  chats?: {
    avatar: {
      link: string
      alt: string
    }
    name: string
    own: boolean
    lastMessage: string
    time: string
    unreaded: number
    active: boolean
  }[]
}

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  _element: HTMLElement
  _meta: {
    tagName: string
    props: object
  }

  eventBus: EventBus = new EventBus()

  constructor(tagName = 'div', public props = {}) {
    this.eventBus = new EventBus()
    this._meta = {
      tagName,
      props,
    }

    this.props = this._makePropsProxy(props)

    this._registerEvents(this.eventBus as EventBus)
    this.eventBus.emit(Block.EVENTS.INIT)
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources() {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init() {
    this._createResources()
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidMount() {
    this.componentDidMount('')
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount(oldProps: string) {}

  _componentDidUpdate(oldProps: string, newProps: string) {
    const response = this.componentDidUpdate(oldProps, newProps)
  }

  componentDidUpdate(oldProps: string, newProps: string) {
    this._render()

    return true
  }

  setProps = nextProps => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element
  }

  _render() {
    const block: string = this.render()

    ;(this._element as HTMLDivElement).innerHTML = block
  }

  async render() {
    return ''
  }

  getContent() {
    return this.element
  }

  _makePropsProxy(props: object) {
    const self = this

    props = new Proxy(props, {
      set(target, prop, value) {
        const oldProps = { ...target }
        target[prop] = value
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет прав')
      },
    })

    return props
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName)
  }

  addEvents() {}

  show() {
    this._element.style.display = 'block'
  }

  hide() {
    this._element.style.display = 'none'
  }
}

export { Block, ComponentProps }
