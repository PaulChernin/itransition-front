import { Config, Connect} from '@vkontakte/superappkit'
import api from '../api/api'
import { Profile } from '../hooks/profile/Profile'

Config.init({
  appId: 51736723
})

export const redirectAuth = () => Connect.redirectAuth({
  url: import.meta.env.VITE_BASE_URL + '/vk-auth'
})

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const handleSilentToken = async (token: string) => {
  const response = await api.post('/vk-auth', {
    silentToken: token
  })
  const jwt: string = response.data.token
  saveToken(jwt)
  const profile: Profile = {
    userId: response.data.user.id,
    userNick: response.data.user.nick,
    isAdmin: response.data.user.isAdmin
  }
  return profile
}