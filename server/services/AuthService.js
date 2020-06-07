const jwt = require('jsonwebtoken')

const db = require('../db')

const { authenticateTeam } = require('./TeamService')

const { jwtSecret } = require('../config')

const findSession = team =>
  db.sessions.list().find(session => session.teamId === team.id)

const createSession = team => db.sessions.create({ teamId: team.id })

const decodeSession = sessionToken => jwt.decode(sessionToken, jwtSecret)

const authenticate = ({ teamName }) => {
  const team = authenticateTeam(teamName)
  const session = findSession(team) || createSession(team)

  return jwt.sign({ session, team }, jwtSecret)
}

module.exports = { authenticate, decodeSession }
