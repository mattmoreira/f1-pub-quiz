const {
  answerQuestion,
  makeQuestion
} = require('../../services/QuestionService')

module.exports = {
  answerQuestion: (root, { input }, { team }) => {
    return answerQuestion(input.questionId, {
      answer: input.answer,
      author: team.id
    })
  },
  makeQuestion: (root, { input }) => makeQuestion(input.type)
}
