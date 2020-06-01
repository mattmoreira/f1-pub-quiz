const {
  answerQuestion,
  getQuestions,
  makeQuestion,
  QUESTION_RECEIVED
} = require('./services/QuestionService')

const { registerTeam } = require('./services/TeamService')

const PubSub = require('./pubsub')

const Mutation = {
  registerTeam: (root, { input }) => registerTeam(input.name),
  answerQuestion: (root, { input }) =>
    answerQuestion(input.questionId, {
      answer: input.answer
    }),
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

const Question = {
  image: ({ expectedAnswer }) => expectedAnswer.image
}

module.exports = { Question, Query, Mutation, Subscription }
