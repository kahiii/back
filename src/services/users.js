import http from '@axios'

class User {
  http = http

  async signIn(...user) {
    console.log(process.env)
    const res = await http.post(`${process.env.VUE_APP_BASE_API}/api/user/signin`, ...user)
    return res.data
  }

  async getMe() {
    const res = await http.get(`${process.env.VUE_APP_BASE_API}/api/user/me`)
    return res.data
  }

  getToken() {
    return localStorage.getItem('jwt')
  }

  setToken(token) {
    localStorage.setItem('jwt', token)
  }

  resetToken() {
    localStorage.removeItem('jwt')
  }

  getUserProfile() {
    return localStorage.getItem('userProfile')
  }

  setUserProfile(userProfile) {
    localStorage.setItem('userProfile', userProfile)
  }

  resetUserProfile() {
    localStorage.removeItem('userProfile')
  }

  async getUsersList(queryParams) {
    const res = await http.get('/apps/user/users', {params: queryParams})
    return res.data.users
  }
}

export default new User()