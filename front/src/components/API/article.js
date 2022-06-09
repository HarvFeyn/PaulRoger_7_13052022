const apiHandler = require('./APIHandler')
// eslint-disable-next-line no-undef
const url = `${API_URL}/article`
const createUrl = `${url}/newArticle`
const indexUrl = `${url}/index`

module.exports = {

  /**
  * Create a new article
  *
  * @param {object} data - details of user : {email, password, firstname, lastname, isModerator}
  */
  createArticle (title, text, author) {
    return apiHandler.post(createUrl, { title, text, author }, { defaultToken: true })
      .then(result => {
        return result
      })
  },

  /**
  * Create a new article
  *
  * @param {object} data - details of user : {email, password, firstname, lastname, isModerator}
  */
  getTenArticle () {
    return apiHandler.get(indexUrl, { defaultToken: true })
      .then(result => {
        return result
      })
  }
}
