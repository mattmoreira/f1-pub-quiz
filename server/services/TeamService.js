const assert = require('assert')

const { createTeam, getTeam } = require('../repositories/TeamRepository')

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
