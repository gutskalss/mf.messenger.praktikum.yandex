import { ProfileData } from '../UIData/Profile'
import { Block } from '../components/Block'
import { ProfileDataList } from '../components/ProfileDataList'
import { Button } from '../components/Button'
import { ProfileAvatar } from '../components/ProfileAvatar'
import { ChangeAvatarModal } from '../components/ChangeAvatarModal'
import { closeModalOnOutClick } from '../utils/closeModalOnOutClick'
import { toggleElements } from '../utils/toggleElements'
import { addCustomFileInput } from '../utils/addCustomFileInput'
import { addInputsValidation, formSubmitHandler } from '../utils/formHandler'

import { getUserInfo } from '../api/index'

export class ProfilePage extends Block {
  async render() {
    const { data: profileDataList } = ProfileData()
    const profileServerData = await getUserInfo()
    const profileAvatarURL = profileServerData.avatar

    profileDataList.forEach(item => {
      item.value = profileServerData[item.name]
    })

    const profileDataListTemplate = new ProfileDataList({ profileDataList })

    const sidebarButtonTemplate = new Button({
      template: 'sidebar',
      backLink: '/chats',
    })

    const profileAvatar = new ProfileAvatar({ profileAvatarURL })

    const changeAvatarModal = new ChangeAvatarModal({})

    const template = `
        <div class="profile">
        ${sidebarButtonTemplate.render()}
        <div class="profile__container hide-scrollbar">
          <div class="profile__data">
            ${profileAvatar.render()}
            <div class="profile__name">Сергей</div>

            ${profileDataListTemplate.render()}

            <ul class="profile__list">
              <li class="profile__list-item">
                <a class="link link_profile" href="/profile-edit">
                  Изменить данные
                </a>
              </li>
              <li class="profile__list-item">
                <a class="link link_profile" href="/change-password">
                  Изменить пароль
                </a>
              </li>
              <li class="profile__list-item">
              <form data-request-name="logout" data-redirect-to="/">
                <button type="submit" class="link link_profile link_danger">Выйти</button>
              </form>
              </li>
            </ul>
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
