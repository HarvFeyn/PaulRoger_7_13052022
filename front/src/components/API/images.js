const apiHandler = require('./APIHandler')
// eslint-disable-next-line no-undef
const url = `${API_URL}/image`
const saveImage = `${url}/`

module.exports = {

  /**
    * Save a new image
    *
    * @param {image, token} data - image to save
    */
  saveImage (body, token) {
    return apiHandler.post(saveImage, body, { headers: { Authorization: `Basic ${token}` }, defaultToken: true })
      .then(result => {
        return result
      })
  }
}
