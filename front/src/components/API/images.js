const apiHandler = require('./APIHandler')
// eslint-disable-next-line no-undef
const url = `${API_URL}/article`
const saveImage = `${url}/saveImage`

module.exports = {

  /**
    * Save a new image
    *
    * @param {image, token} data - image to save
    */
  saveImage (image, token) {
    return apiHandler.post(saveImage, { image }, { headers: { Authorization: `Basic ${token}` }, defaultToken: true })
      .then(result => {
        return result
      })
  }
}
