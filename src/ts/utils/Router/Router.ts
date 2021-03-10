import { render } from '../render'
import { SigninPage } from '../../pages/signin'
import { SignupPage } from '../../pages/signup'
import { ProfilePage } from '../../pages/profile'
import { ProfileEditPage } from '../../pages/profile-edit'
import { ChangePasswordPage } from '../../pages/change-password'
import { ChatsPage } from '../../pages/chats'
import { DialogPage } from '../../pages/dialog'
import { Error404Page } from '../../pages/404'
import { Error500Page } from '../../pages/500'
import { Block } from '../../components/Block'

type ComponentClass =
  | typeof Error500Page
  | typeof Error404Page
  | typeof SigninPage
  | typeof SignupPage
  | typeof ProfilePage
  | typeof ProfileEditPage
  | typeof ChangePasswordPage
  | typeof ChatsPage
  | typeof DialogPage
type rootQuery = {
  rootQuery: string
}

class Route {
  _pathname: string

  _block: Block | null

  _props: rootQuery

  _blockClass: ComponentClass

  constructor(pathname: string, view: ComponentClass, props: rootQuery) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string) {
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

  match(pathname: string) {
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
  private static __instance: Router

  routes: Route[] = []

  private history: History = window.history

  private _currentRoute: Route | null | undefined

  private _rootQuery: string = ''

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  use(pathname: string, block: ComponentClass) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })
    this.routes.push(route)

    return this
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
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

  go(pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname))
  }
}
