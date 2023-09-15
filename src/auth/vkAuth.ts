import { Config, Connect} from '@vkontakte/superappkit'
import axios from '../api/axios'
import { User } from '@/types/User'

Config.init({
  appId: 51736723
})

export const redirectAuth = () => Connect.redirectAuth({
  url: import.meta.env.VITE_BASE_URL + '/vk-auth'
})

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

type ExchangeTokensResponse = {
  user: User,
  token: string
}

const exchangeTokens = async (silent: string) => {
  const response = await axios.post('/vk-auth', {
    silentToken: silent
  })
  return response.data as ExchangeTokensResponse
}

export const handleSilentToken = async (silent: string) => {
  const { user, token } = await exchangeTokens(silent)
  const jwt: string = token
  saveToken(jwt)
  return user
}