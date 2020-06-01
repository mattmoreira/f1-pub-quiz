const jwt = require('jsonwebtoken')

const db = require('../db')

const { findTeam, createTeam } = require('./TeamService')

const { jwtSecret } = require('../config')

const findSession = team =>
  db.sessions.list().find(session => session.teamId === team.id)

const createSession = team => db.sessions.create({ teamId: team.id })

const authenticate = ({ teamName }) => {
  const team = findTeam(teamName) || createTeam(teamName)
  const session = findSession(team) || createSession(team)

  return jwt.sign(session, jwtSecret)
}

module.exports = { authenticate }
