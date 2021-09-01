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
/* http.interceptors.response.use(
  response => response,
  error => {
    const { config, response } = error
    const originalRequest = config

    if (response && response.status === 401) {
      User.signIn({
        email: 'kenan.dufrene@live.fr',
        password: 'test'
      }).then(res => localStorage.setItem('jwt', res.accessToken))
    }
    const retryOriginalRequest = new Promise(resolve => {
        // Make sure to assign accessToken according to your response.
        // Check: https://pixinvent.ticksy.com/ticket/2413870
        // Change Authorization header
        resolve(http(originalRequest))
    })
    return retryOriginalRequest
  }
) */
export default http
