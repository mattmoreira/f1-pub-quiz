const path = require('path')

const { mergeTypes, fileLoader } = require('merge-graphql-schemas')

const schemaPath = path.join(__dirname, './**/schema/*.graphql')
const typesArray = fileLoader(schemaPath)

module.exports = mergeTypes(typesArray, { all: true })
