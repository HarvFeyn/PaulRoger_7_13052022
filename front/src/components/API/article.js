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
  createArticle (title, text, author, authorId, token) {
    return apiHandler.post(createUrl, { title, text, author, authorId }, { headers: { Authorization: `Basic ${token}` }, defaultToken: true })
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
  * @param {int} userId - id user
  * @param {int} id - id of the article to delete
  * @param {String} token - token of the user
  */
  deleteArticle (userId, id, token) {
    return apiHandler.delete(oneArticleUrl + id, { userId }, { headers: { Authorization: `Basic ${token}` } }, { defaultToken: true })
      .then(result => {
        return result
      })
  },

  /**
  * Modify one articles by id
  *
  * @param {int} userId - id user
  * @param {String} title - id of the article to modify
  * @param {String} text - id of the article to modify
  * @param {String} author - id of the article to modify
  * @param {int} id - id of the article to modify
  * @param {String} token - token of the user
  */
  modifyArticle (userId, title, text, author, id, token) {
    return apiHandler.patch(oneArticleUrl + id, { userId, title, text, author }, { headers: { Authorization: `Basic ${token}` } }, { defaultToken: true })
      .then(result => {
        return result
      })
  },

  /**
  * Modify one articles by id
  *
  * @param {int} userId - id user
  * @param {int} id - id of the article to modify
  * @param {int} like - like of the article to modify
  * @param {String} token - token of the user
  */
  likeArticle (userId, id, like, token) {
    return apiHandler.patch(oneArticleUrl + id + '/like', { userId, like }, { headers: { Authorization: `Basic ${token}` } }, { defaultToken: true })
      .then(result => {
        return result
      })
  }

}
