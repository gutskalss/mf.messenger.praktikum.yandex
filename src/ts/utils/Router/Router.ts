import { render } from '../render.js'

class Route {
  constructor(pathname, view, props) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname) {
    return pathname === this._pathname
  }

  async render() {
    if (!this._block) {
      this._block = new this._blockClass('div', {})
    }

    render(this._props.rootQuery, await this._block.render())
    this._block.addEvents()
  }
}

export class Router {
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })
    this.routes.push(route)

    return this
  }

  start() {
    window.onpopstate = event => {
      this._onRoute(event.currentTarget.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname) {
    const route = this.getRoute(pathname)

    if (!route) {
      return
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    this._currentRoute.render()
  }

  go(pathname) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname) {
    return this.routes.find(route => route.match(pathname))
  }
}