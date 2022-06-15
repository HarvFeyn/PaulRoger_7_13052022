const apiHandler = require('./APIHandler')
// eslint-disable-next-line no-undef
const url = `${API_URL}/article`
const createUrl = `${url}/newArticle`
const indexUrl = `${url}/index`
const oneArticleUrl = `${url}/`

module.exports = {

  /**
  * Create a new article
  *
  * @param {String} title - id of the article to modify
  * @param {String} text - id of the article to modify
  * @param {String} author - id of the article to modify
  * @param {String} token - token of the user
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
  },

  /**
  * Get one articles by id
  *
  * @param {int} id - id of the article to get
  */
  getOneArticle (id) {
    return apiHandler.get(oneArticleUrl + id, { defaultToken: true })
      .then(result => {
        return result
      })
  },

  /**
  * Delete one articles by id
  *
  * @param {int} id - id of the article to delete
  * @param {String} token - token of the user
  */
  deleteArticle (id, token) {
    return apiHandler.delete(oneArticleUrl + id, {}, { headers: { Authorization: `Basic ${token}` } }, { defaultToken: true })
      .then(result => {
        return result
      })
  },

  /**
  * Modify one articles by id
  *
  * @param {String} title - id of the article to modify
  * @param {String} text - id of the article to modify
  * @param {String} author - id of the article to modify
  * @param {int} id - id of the article to modify
  * @param {String} token - token of the user
  */
  modifyArticle (title, text, author, id, token) {
    return apiHandler.patch(oneArticleUrl + id, { title, text, author }, { headers: { Authorization: `Basic ${token}` } }, { defaultToken: true })
      .then(result => {
        return result
      })
  }
}
