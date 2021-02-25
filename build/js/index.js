import { Router } from "./utils/Router/index.js";
import { SigninPage } from "./pages/signin.js";
import { SignupPage } from "./pages/signup.js";
import { ProfilePage } from "./pages/profile.js";
import { ProfileEditPage } from "./pages/profile-edit.js";
import { ChangePasswordPage } from "./pages/change-password.js";
import { ChatsPage } from "./pages/chats.js";
import { DialogPage } from "./pages/dialog.js";
import { Error404Page } from "./pages/404.js";
import { Error500Page } from "./pages/500.js";
const router = new Router('#root');
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
    .start();
//# sourceMappingURL=index.js.map