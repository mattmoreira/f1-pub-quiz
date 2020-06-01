const db = require('../db')

const getTeam = ({ fullName, id }) =>
  db.teams.list().find(team => team.fullName === fullName || team.id === id)

const createTeam = teamName =>
  db.teams.create({
    fullName: teamName,
    shortName: teamName
  })

module.exports = { getTeam, createTeam }
