const PubSub = require('../../pubsub')

const { QUESTION_RECEIVED } = require('../../services/QuestionService')

module.exports = {
  questionReceived: {
    subscribe: () => PubSub.asyncIterator(QUESTION_RECEIVED)
  }
}
