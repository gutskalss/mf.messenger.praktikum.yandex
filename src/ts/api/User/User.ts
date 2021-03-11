import { HTTPTransport } from '../HTTPTransport/HTTPTransport'

const host = 'https://ya-praktikum.tech/api/v2/'
interface RequestResult {
  ok: boolean
  status: number
  statusText: string
  data: string
  json: <T>() => T
  headers: string
  response?: [] | string
}
type ProfileData = {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}
type ChangePasswordData = {
  oldPassword: string
  newPassword: string
}
export function changeUserProfile(data: ProfileData, redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${host}user/profile`

  request
    .put(url, { data: JSON.stringify(data) })
    .then((result: RequestResult) => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}

export function changeUserPassword(
  data: ChangePasswordData,
  redirectURL: string
) {
  const request = new HTTPTransport()
  const url = `${host}user/password`

  request
    .put(url, { data: JSON.stringify(data) })
    .then((result: RequestResult) => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch((err) => console.error(err))
}

export function changeUserAvatar(redirectURL: string) {
  const request = new HTTPTransport()
  const url = `${host}user/profile/avatar`
  let files: FileList = <FileList>(
    (<HTMLInputElement>document.getElementById('avatar')).files
  )

  const formData = new FormData()
  formData.append('avatar', files.item(0)!)

  request
    .put(url, {
      data: formData,
      headers: null,
    })
    .then((result: RequestResult) => {
      if (result.status === 200) {
        window.location.href = redirectURL
      } else {
        const parsedResp = JSON.parse(result.response as string)
        const reason = parsedResp.reason
        alert(reason)
      }
    })
    .catch(function (err) {
      throw err
    })
}
