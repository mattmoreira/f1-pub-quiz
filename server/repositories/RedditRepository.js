const fetch = require('node-fetch')

const { formatParams } = require('../utils/request')

const REDDIT_BASE_API = 'https://gateway.reddit.com/desktopapi/v1'

const queryRedditImage = ({ query, ...params }) => {
  const formattedParams = formatParams({
    ...params,
    q: query,
    sort: 'relevance'
  })

  const endpoint = `${REDDIT_BASE_API}/search?${formattedParams}`

  return fetch(endpoint)
    .then(res => res.json())
    .then(res => res.posts[res.postOrder[0]])
    .then(res => res.preview.url)
}

module.exports = { queryRedditImage }
