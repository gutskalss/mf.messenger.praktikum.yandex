import { EventBus } from '../utils/eventBus'

export interface ComponentProps {
  template?: string
  backLink?: string
  classList?: string
  profileAvatarURL?: string
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

export class Block {
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
    // this._element='';
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
    //	this.componentDidMount('')
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  // componentDidMount(oldProps: string) { }

  _componentDidUpdate() {
    const response = this.componentDidUpdate()
    return response
  }

  // _componentDidUpdate(oldProps: TypeProps, newProps: TypeProps) {
  // 	const response = this.componentDidUpdate(oldProps, newProps)
  // }

  // componentDidUpdate(oldProps: TypeProps, newProps: TypeProps) {
  componentDidUpdate() {
    this._render()

    return true
  }

  setProps = (nextProps: string | boolean | number) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element
  }

  async _render() {
    const block = await this.render()
    ;(this._element as HTMLElement).innerHTML = block
  }

  async render() {
    return ''
  }

  getContent() {
    return this.element
  }

  _makePropsProxy(props: object) {
    props = new Proxy(props, {
      set: (target: Record<string, string>, prop: string, value) => {
        // const oldProps = { ...target }
        target[prop] = value
        //	this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target)
        this.eventBus.emit(Block.EVENTS.FLOW_CDU)

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
    this._element.classList.add('hide')
  }

  hide() {
    this._element.classList.remove('hide')
  }
}
