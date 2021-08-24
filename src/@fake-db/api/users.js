import mock from '@datas/mock'
import { users } from '@datas/datas/users'

mock.onGet('/apps/user/users').reply(config => {
  const {
    q = '',
  } = config.params

  const queryLowered = q.toLowerCase()

  const filteredData = users.filter(
    user => 
      (user.fullname.toLowerCase().includes(queryLowered) || user.username.toLowerCase().includes(queryLowered))
  )

  return [
    200,
    {
      users: filteredData
    }
  ]
})