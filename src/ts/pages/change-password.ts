import { ProfileData } from '../UIData/Profile'
import { Block } from '../components/Block'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ProfileAvatar } from '../components/ProfileAvatar'
import { ChangeAvatarModal } from '../components/ChangeAvatarModal'
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick'
import { toggleElements } from '../utils/toggleElements'
import { addCustomFileInput } from '../utils/addCustomFileInput'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler'

import { getUserInfo } from '../api/index'

const Handlebars = require('handlebars')

export class ChangePasswordPage extends Block {
  async render() {
    const { changePasswordData, saveButton } = ProfileData()
    const profileServerData = await getUserInfo()
    const profileAvatarURL = profileServerData.avatar

    const sidebarButtonTemplate = new Button({
      template: 'sidebar',
      backLink: '/profile',
    })
    const profileAvatar = new ProfileAvatar({ profileAvatarURL })
    const changePasswordInputs = new Input({
      template: 'profile',
      inputs: changePasswordData,
    })
    const submitButtonTemplate = new Button(saveButton)
    const changeAvatarModal = new ChangeAvatarModal({})

    const template = `
        <div class="profile">
        ${sidebarButtonTemplate.render()}
        <div class="profile__container hide-scrollbar">
          <div class="profile__data">
            ${profileAvatar.render()}

            <div class="profile__name"></div>

            <form data-request-name="changeUserPassword" data-redirect-to="/profile" class="form_profile-edit">
              ${changePasswordInputs.render()}
              ${submitButtonTemplate.render()}
            </form>
          </div>
        </div>
      </div>
      ${changeAvatarModal.render()}
    `

    const pageTemplate = Handlebars.compile(template)

    return pageTemplate()
  }

  addEvents() {
    toggleElements()
    addCustomFileInput()
    closeModalOnOutClick()
    addInputsValidation()
    formSubmitHandler()
  }
}
