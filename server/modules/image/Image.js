const assert = require('assert')

const { ImageUnavailableError } = require('../../errors/image')

const { queryRedditImage } = require('../../repositories/RedditRepository')

module.exports = {
  url: (root = {}) => {
    try {
      assert.ok(root.url, ImageUnavailableError)

      return root.url
    } catch (e) {
      return queryRedditImage({ query: root.query })
    }
  },
  source: (root = {}) => {
    return root.url && root.url.includes('wikimedia') ? 'WIKIPEDIA' : 'REDDIT'
  }
}
