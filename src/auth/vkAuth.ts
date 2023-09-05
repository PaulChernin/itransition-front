import { Config, Connect} from '@vkontakte/superappkit'
import api from '../api/api'

Config.init({
  appId: 51736723
})

export const redirectAuth = () => Connect.redirectAuth({
  url: import.meta.env.VITE_BASE_URL + '/vk-auth'
})

export const handleSilentToken = async (token: string) => {
  const response = await api.post('/vk-auth', {
    silentToken: token
  })
  const user: { id: number, nick: string } = response.data
  return user
}