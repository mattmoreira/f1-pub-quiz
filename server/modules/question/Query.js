const { getQuestions } = require('../../services/QuestionService')

module.exports = {
  questions: (root, { questionId } = {}) => {
    const questions = getQuestions()

    if (questionId) {
      return questions.find(question => question.id === questionId)
    }

    return questions
  }
}
