const {
  answerQuestion,
  getQuestions,
  makeQuestion,
  QUESTION_RECEIVED
} = require('./services/QuestionService')

const { authenticate } = require('./services/AuthService')

const PubSub = require('./pubsub')

const Mutation = {
  authenticate: (root, { input }) => authenticate({ teamName: input.name }),
  answerQuestion: (root, { input }, { team }) => {
    return answerQuestion(input.questionId, {
      answer: input.answer,
      author: team.id
    })
  },
  makeQuestion: (root, { input }) => makeQuestion(input.type)
}

const Subscription = {
  questionReceived: {
    subscribe: () => PubSub.asyncIterator(QUESTION_RECEIVED)
  }
}

const Query = {
  questions: (root, { questionId } = {}) => {
    const questions = getQuestions()

    if (questionId) {
      return questions.find(question => question.id === questionId)
    }

    return questions
  }
}

module.exports = { Query, Mutation, Subscription }
