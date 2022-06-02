const apiHandler = require('./APIHandler')
// eslint-disable-next-line no-undef
const url = `${API_URL}/auth`
const signinUrl = `${url}/login`
const signupUrl = `${url}/signup`

module.exports = {
  /**
    * Check if email and password given are valid on the server
    *
    * @param {string} email - The email of the user
    * @param {string} password - The password of the user
    */
  signin (email, password) {
    return apiHandler.post(signinUrl, { email, password }, { defaultToken: true })
      .then(result => {
        return result
      })
  },
  /**
    * Register user details given on the server
    *
    * @param {object} data - details of user : {email, password, firstname, lastname, isModerator}
    */
  signup (data) {
    return apiHandler.post(signupUrl, data, { defaultToken: true })
      .then(result => {
        return result
      })
  }
}
