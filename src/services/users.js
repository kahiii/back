import http from '@axios'

class User {
  http = http

  async getUsersList(queryParams) {
    const res = await http.get('/apps/user/users', {params: queryParams})
    return res.data.users
  }
}

export default new User()