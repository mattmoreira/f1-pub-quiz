const {
  getWikiCategory,
  getWikiInfobox,
  getWikiSummary
} = require('../repositories/WikipediaRepository')

const { v4: uuidv4 } = require('uuid')

const carModelRegex = new RegExp(
  /(?<teamShortName>[\w\s-]+)\s(?<model>[\w-]+)$/
)

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min)

const getCarsPerYear = year =>
  getWikiCategory(`${year}_Formula_One_season_cars`).then(res =>
    res.map(member => member.title)
  )

const getRandomCar = async () => {
  try {
    const currentYear = new Date().getFullYear()
    const randomYear = getRandomNumber(1965, currentYear)

    const cars = await getCarsPerYear(randomYear)
    const randomCarIndex = getRandomNumber(0, cars.length)

    const selectedCar = cars[randomCarIndex]
    const summary = await getWikiSummary(selectedCar)

    const { engineName, constructor, debut } = await getWikiInfobox({
      pageName: summary.title,
      pageId: summary.pageid
    }).then(res => res.general)

    const engineManufacturer = !Array.isArray(engineName)
      ? engineName
      : engineName.join(' - ')

    const { teamShortName, model } = carModelRegex.exec(summary.title).groups

    const image = summary.originalimage || {}

    const team = {
      fullName: constructor,
      shortName: teamShortName
    }

    return {
      id: uuidv4(),
      image: image.source,
      model: model,
      description: summary.extract,
      engineManufacturer,
      year: randomYear,
      debut,
      team
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = { getRandomCar }
