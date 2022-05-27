const axios = require('axios')
const { defaultToken } = require('../../helpers/properties')

const defaultOptions = {
  headers: { 'Content-Type': 'application/json' }
}

const computeHeaders = (options = {}) => {
  const authToken = { Authorization: `Bearer ${options.token || defaultToken}` }
  const headers = {}

  Object.assign(headers, authToken)
  Object.assign(headers, defaultOptions.headers)
  Object.assign(headers, options.headers || {})

  return headers
}

module.exports = {
  head: url => axios.head(url)
    .then(response => response.status)
    .catch(reason => reason.response.status === 404 ? 404 : reason),

  get: (url, options = {}) => {
    return axios({
      method: 'get',
      url: url,
      headers: computeHeaders(options),
      withCredentials: true
    })
  },

  post: (url, data, options = {}) => {
    return axios({
      method: 'post',
      url: url,
      headers: computeHeaders(options),
      withCredentials: true,
      data
    })
  },

  patch: (url, data, options = {}) => {
    return axios({
      method: 'patch',
      url: url,
      headers: computeHeaders(options),
      withCredentials: true,
      data
    })
  },

  delete: (url, data, options = {}) => {
    return axios({
      method: 'delete',
      url: url,
      headers: computeHeaders(options),
      withCredentials: true,
      data
    })
  }
}
