import { Router } from './utils/Router/index'
import { SigninPage } from './pages/signin'
import { SignupPage } from './pages/signup'
import { ProfilePage } from './pages/profile'
import { ProfileEditPage } from './pages/profile-edit'
import { ChangePasswordPage } from './pages/change-password'
import { ChatsPage } from './pages/chats'
import { DialogPage } from './pages/dialog'
import { Error404Page } from './pages/404'
import { Error500Page } from './pages/500'

const router = new Router('#root')

router
  .use('/', SigninPage)
  .use('/signup', SignupPage)
  .use('/profile', ProfilePage)
  .use('/profile-edit', ProfileEditPage)
  .use('/change-password', ChangePasswordPage)
  .use('/chats', ChatsPage)
  .use('/dialog', DialogPage)
  .use('/404', Error404Page)
  .use('/500', Error500Page)
  .start()
