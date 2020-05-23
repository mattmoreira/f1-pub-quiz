const slugify = require('slugify')
const fetch = require('node-fetch')
const parseInfobox = require('infobox-parser')

const MEDIA_WIKI_API = 'https://en.wikipedia.org/w/api.php'
const WIKI_REST_API = 'https://en.wikipedia.org/api/rest_v1'

const formatParams = params =>
  Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

const queryWiki = async params => {
  const formattedParams = formatParams(params)
  const endpoint = `${MEDIA_WIKI_API}?action=query&${formattedParams}&format=json`

  return fetch(endpoint).then(res => res.json())
}

const getWikiCategory = categoryName =>
  queryWiki({
    list: 'categorymembers',
    cmlimit: 100,
    cmtitle: `Category:${categoryName}`
  }).then(res => res.query.categorymembers)

const getWikiInfobox = ({ pageName, pageId }) =>
  queryWiki({
    prop: 'revisions',
    rvprop: 'content',
    rvslots: 'main',
    titles: slugify(pageName, '_'),
    rvsection: 0
  }).then(res => {
    const { revisions } = res.query.pages[pageId]
    const { slots } = revisions[0]

    return parseInfobox(slots.main['*'])
  })

const getWikiSummary = async pageName => {
  const endpoint = `${WIKI_REST_API}/page/summary/${slugify(pageName, '_')}`

  return fetch(endpoint).then(res => res.json())
}

module.exports = {
  getWikiCategory,
  getWikiInfobox,
  getWikiSummary
}
