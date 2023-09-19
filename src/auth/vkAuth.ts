import { Config, Connect} from '@vkontakte/superappkit'
import { User } from '@/types/User'
import fetch from '@/api/fetch'

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
  const response: ExchangeTokensResponse = await fetch('/vk-auth', {
    silentToken: silent
  })
  return response
}

export const handleSilentToken = async (silent: string) => {
  const { user, token } = await exchangeTokens(silent)
  saveToken(token)
  return user
}