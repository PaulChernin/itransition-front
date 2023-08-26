import { Config, Connect} from '@vkontakte/superappkit'

Config.init({
  appId: 51736723
})

const redirectAuthHandler = () => Connect.redirectAuth({
    url: import.meta.env.VITE_BASE_URL + '/vk-auth'
})

export default redirectAuthHandler