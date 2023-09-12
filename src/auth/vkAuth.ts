import { Config, Connect} from '@vkontakte/superappkit'
import axios from '../api/axios'

Config.init({
  appId: 51736723
})

export const redirectAuth = () => Connect.redirectAuth({
  url: import.meta.env.VITE_BASE_URL + '/vk-auth'
})

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

type dbProfile = {
    id: number,
    nick: string,
    isAdmin: boolean
}

type ExchangeTokensResponse = {
  user: dbProfile,
  token: string
}

const exchangeTokens = async (silent: string) => {
  const response = await axios.post('/vk-auth', {
    silentToken: silent
  })
  return response.data as ExchangeTokensResponse
}

const mapProfile = (profile: dbProfile) => {
  return {
    userId: profile.id,
    userNick: profile.nick,
    isAdmin: profile.isAdmin
  }
}

export const handleSilentToken = async (silent: string) => {
  const { user, token } = await exchangeTokens(silent)
  const jwt: string = token
  saveToken(jwt)
  return mapProfile(user)
}