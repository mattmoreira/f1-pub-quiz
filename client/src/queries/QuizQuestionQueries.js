import { gql } from 'apollo-boost'

export const SUBSCRIPTION_QUESTION_RECEIVED = gql`
  subscription {
    questionReceived {
      id
      type
      image {
        url
      }
    }
  }
`

export const MUTATION_ANSWER_QUESTION = gql`
  mutation AnswerQuestion($input: AnswerQuestionInput) {
    answerQuestion(input: $input) {
      originalQuestion {
        id
      }
      answer {
        isCorrect
      }
    }
  }
`
