const assert = require('assert')

const PubSub = require('../pubsub')

const {
  createQuestion,
  addQuestionAnswer,
  getQuestions
} = require('../repositories/QuestionRepository')

const { getRandomCar } = require('./F1CarsService')

const QUESTION_RECEIVED = 'questionReceived'

const QUESTION_ANSWER_GENERATOR = {
  CAR_MODEL: getRandomCar
}

const CREATE_QUESTION_ERROR_MISSING_TYPE = `
  It wasn't possible to create a question:
  The question type provided is invalid
`

const makeQuestion = async type => {
  const getQuestionAnswer = QUESTION_ANSWER_GENERATOR[type]

  assert.notStrictEqual(
    getQuestionAnswer,
    null,
    CREATE_QUESTION_ERROR_MISSING_TYPE
  )

  const expectedAnswer = await getQuestionAnswer()
  const createdQuestion = createQuestion({ type, expectedAnswer })

  const formattedQuestion = {
    id: createdQuestion.id,
    type: createdQuestion.type,
    image: createdQuestion.expectedAnswer.image
  }

  PubSub.publish(QUESTION_RECEIVED, formattedQuestion)

  return formattedQuestion
}

const answerQuestion = (questionId, params) =>
  addQuestionAnswer(questionId, params)

module.exports = {
  makeQuestion,
  answerQuestion,
  getQuestions,
  QUESTION_RECEIVED
}
