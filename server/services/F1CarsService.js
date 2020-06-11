const {
  getWikiCategory,
  getWikiInfobox,
  getWikiSummary
} = require('../repositories/WikipediaRepository')

const carModelRegex = new RegExp(
  /(?<teamShortName>[\w\s-]+)\s(?<model>[\w-]+)$/
)

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min)

const getCarsPerYear = year =>
  getWikiCategory(`${year}_Formula_One_season_cars`).then(res =>
    res.map(member => member.title)
  )

const getCarImage = (originalimage = {}, query) => {
  return {
    url: originalimage.source,
    query
  }
}

const getCarInfo = async selectedCar => {
  const summary = await getWikiSummary(selectedCar)

  const { engineName, constructor, debut } = await getWikiInfobox({
    pageName: summary.title,
    pageId: summary.pageid
  }).then(res => res.general)

  const engineManufacturer = !Array.isArray(engineName)
    ? engineName
    : engineName.join(' - ')

  const { teamShortName, model } = carModelRegex.exec(summary.title).groups

  const team = {
    fullName: constructor,
    shortName: teamShortName
  }

  return {
    image: getCarImage(summary.originalimage, selectedCar),
    model: model,
    description: summary.extract,
    engineManufacturer,
    debut,
    team
  }
}

const getRandomCar = async () => {
  try {
    const currentYear = new Date().getFullYear()
    const randomYear = getRandomNumber(1965, currentYear)

    const cars = await getCarsPerYear(randomYear)
    const randomCarIndex = getRandomNumber(0, cars.length)

    const selectedCarModel = cars[randomCarIndex]
    const carInfo = await getCarInfo(selectedCarModel)

    return {
      year: randomYear,
      ...carInfo
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = { getRandomCar }
