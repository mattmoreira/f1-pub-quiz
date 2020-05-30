const { DataStore } = require('notarealdb')

const store = new DataStore('./data')

module.exports = {
  teams: store.collection('teams'),
  sessions: store.collection('sessions')
}
