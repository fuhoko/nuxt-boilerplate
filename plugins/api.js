import repositories from '@/repositories'

export default function ({ app, $auth, $axios, error }, inject) {
  const axios = $axios.create({
    headers: {
      common: {
        ContentType: 'application/json',
        Accept: 'application/json'
      }
    }
  })
  axios.onRequest((config) => {
    const token = $auth.strategy.token.get()
    if (token) {
      config.headers.Authorization = token
    }
  })
  axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    error({
      statusCode: code
    })
    return Promise.resolve()
  })

  inject('api', repositories(axios))
}