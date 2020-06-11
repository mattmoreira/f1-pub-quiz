class ImageUnavailableError extends Error {
  constructor() {
    super()

    this.name = 'IMAGE_NOT_AVAILABLE'
    this.status = 400
  }
}

module.exports = ImageUnavailableError
