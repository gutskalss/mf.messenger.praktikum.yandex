import render from '../utils/render.js'
import ProfileData from '../services/ProfileData.js'
import ProfileDataList from '../components/ProfileDataList.js'
import Button from '../components/Button.js'
import ProfileAvatar from '../components/ProfileAvatar.js'
import ModalWindow from '../components/ModalWindow.js'

const { data: profileData } = ProfileData()

const sidebarButtonTemplate = new Button({ template: 'sidebar' })
const profileAvatar = new ProfileAvatar({})
const profileDataListTemplate = new ProfileDataList({
  profileData,
})
const modalWindow = new ModalWindow({ template: 'changeAvatar' })

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
            <a class="link link_profile" href="/profile-edit.html">
              Изменить данные
            </a>
          </li>
          <li class="profile__list-item">
            <a class="link link_profile" href="/change-password.html">
              Изменить пароль
            </a>
          </li>
          <li class="profile__list-item">
            <a class="link link_profile link_danger" href="#">Выйти</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  ${modalWindow.render()}
`

const pageTemplate = Handlebars.compile(template)

render('#root', pageTemplate())
