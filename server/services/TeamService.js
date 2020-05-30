const assert = require('assert')

const db = require('../db')

const getTeam = ({ fullName, id }) =>
  db.teams.list().find(team => team.fullName === fullName || team.id === id)

const createTeam = teamName =>
  db.teams.create({
    fullName: teamName,
    shortName: teamName
  })

const registerTeam = teamName => {
  assert.notEqual(teamName, null, "Team name can't be null")

  const team = getTeam({ fullName: teamName })

  if (!team) {
    const teamId = createTeam(teamName)
    return getTeam({ id: teamId })
  }

  return team
}

module.exports = { registerTeam }
