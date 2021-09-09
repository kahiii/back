import axios from 'axios'
// import User from '@/services/users.js'

const http = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

http.interceptors.request.use( config => {
  const accessToken = localStorage.getItem('jwt')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

http.interceptors.response.use(
  response => {
    if (response.data.accessToken) {
      localStorage.setItem('jwt', response.data.accessToken)
    }
    if (response.data.userProfile) {
      localStorage.setItem('userProfile', response.data.userProfile)
    }
    return response
  }
)

export default http
