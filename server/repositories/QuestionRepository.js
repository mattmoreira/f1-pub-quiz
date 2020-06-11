const FuzzySet = require('fuzzyset')

const db = require('../db')

const getQuestions = () => db.questions.list()

const getQuestion = ({ id }) =>
  getQuestions().find(question => question.id === id)

const createQuestion = params => {
  const questionId = db.questions.create({
    ...params,
    answers: []
  })

  return getQuestion({ id: questionId })
}

const isAnswerCorrect = (answer, questionData) => {
  const { team, model: expectedModel } = questionData

  const indexModel = answer.indexOf(expectedModel)
  const answerName = answer.slice(0, indexModel).trim()

  const fuzzySet = FuzzySet([answerName])
  const nameMatch = fuzzySet.get(team.shortName)

  const regexExpectedModel = new RegExp(expectedModel, 'i')

  return regexExpectedModel.test(answer) && Boolean(nameMatch)
}

const addQuestionAnswer = (questionId, params) => {
  const question = getQuestion({ id: questionId })

  const answer = {
    author: params.author,
    answer: params.answer,
    isCorrect: isAnswerCorrect(params.answer, question.data)
  }

  question.answers.push(answer)
  db.questions.update(question)

  return { originalQuestion: question, answer }
}

module.exports = {
  createQuestion,
  addQuestionAnswer,
  getQuestions
}
