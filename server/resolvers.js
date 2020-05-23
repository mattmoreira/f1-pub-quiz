const { getRandomCar } = require('./services/F1CarsService')

const Query = {
  randomCar: () => getRandomCar()
}

module.exports = { Query }
