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
  createArticle (title, text, author, token) {
    return apiHandler.post(createUrl, { title, text, author }, { headers: { Authorization: `Basic ${token}` }, defaultToken: true })
      .then(result => {
        return result
      })
  },

  /**
  * Get articles
  *
  */
  getAllArticle () {
    return apiHandler.get(indexUrl, { defaultToken: true })
      .then(result => {
        return result
      })
  }
}
