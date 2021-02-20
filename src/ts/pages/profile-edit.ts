import { ProfileData } from '../UIData/Profile.js'
import { Block } from '../components/Block.js'
import { Button } from '../components/Button.js'
import { Input } from '../components/Input.js'
import { ProfileAvatar } from '../components/ProfileAvatar.js'
import { ChangeAvatarModal } from '../components/ChangeAvatarModal.js'
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick.js'
import { toggleElements } from '../utils/toggleElements.js'
import { addCustomFileInput } from '../utils/addCustomFileInput.js'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler.js'

import { getUserInfo } from '../api/index.js'

export class ProfileEditPage extends Block {
  async render() {
    const { data: profileDataList, saveButton } = ProfileData()
    const profileServerData = await getUserInfo()
    const profileAvatarURL = profileServerData.avatar

    profileDataList.forEach(item => {
      item.value = profileServerData[item.name]
    })

    const sidebarButtonTemplate = new Button({
      template: 'sidebar',
      backLink: '/profile',
    })
    const profileAvatar = new ProfileAvatar({ profileAvatarURL })
    const changeProfileInputs = new Input({
      template: 'profile',
      inputs: profileDataList,
    })
    const submitButtonTemplate = new Button(saveButton)
    const changeAvatarModal = new ChangeAvatarModal({})

    const template = `
        <div class="profile">
        ${sidebarButtonTemplate.render()}
        <div class="profile__container hide-scrollbar">
          <div class="profile__data">
            ${profileAvatar.render()}

            <div class="profile__name">Сергей</div>

            <form data-request-name="changeUserProfile" data-redirect-to="/profile" class="form_profile-edit" action="#">
              ${changeProfileInputs.render()}
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
