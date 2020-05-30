const { getRandomCar } = require('./services/F1CarsService')
const { registerTeam } = require('./services/TeamService')

const Query = {
  randomCar: () => getRandomCar()
}

const Mutation = {
  registerTeam: (root, params) => registerTeam(params.input.name)
}

module.exports = { Query, Mutation }
