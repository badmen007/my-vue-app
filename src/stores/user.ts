import { useTagsView } from './tagsView'
import { removeToken, setToken } from './../utils/auth'
import { defineStore } from 'pinia'
import { login as loginApi } from '@/api/user'

export interface IUserInfo {
  username: string
  password: string
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const state = reactive({
    token: ''
  })
  const login = async (userInfo: IUserInfo) => {
    try {
      const { username, password } = userInfo
      const response = await loginApi({ username: username.trim(), password })
      const { data } = response
      state.token = data.token
      setToken(data.token)
    } catch (e) {
      return Promise.reject(e)
    }
  }
  const { delAllView } = useTagsView()
  const logout = () => {
    // 清空store中的store
    state.token = ''
    // 清空localStorage中的token
    removeToken()
    // 清除所有的tagsView
    delAllView()
  }

  const resetToken = () => {
    // 清空store中的token 
    state.token = ''
    removeToken
  }

  return { state, login, logout, resetToken }
})
