import styles from './quiz_question.module.css'

import React from 'react'
import { useSubscription, useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import ResponsiveImage from 'components/responsiveImage/ResponsiveImage'

import {
  SUBSCRIPTION_QUESTION_RECEIVED,
  MUTATION_ANSWER_QUESTION
} from 'queries/QuizQuestionQueries'

import QuizHeader from '../shared/QuizHeader'

const TITLE = {
  CAR_MODEL: 'Can you guess the car model?',
  WAITING: 'Waiting for the next question...'
}

const useSubscriptionQuestion = () => {
  const { data: { questionReceived = {} } = {} } = useSubscription(
    SUBSCRIPTION_QUESTION_RECEIVED
  )

  const titleByType = TITLE[questionReceived.type] || TITLE.WAITING

  return {
    ...questionReceived,
    title: titleByType,
    image: questionReceived.image && questionReceived.image.url
  }
}

const isQuestionAnswered = ({ answerQuestion } = {}, questionReceived) => {
  if (!answerQuestion) {
    return false
  }

  return answerQuestion.originalQuestion.id === questionReceived.id
}

function QuizQuestionContainer() {
  const { register, handleSubmit } = useForm()
  const questionReceived = useSubscriptionQuestion()

  const [answerQuestion, responseMutationAnswer] = useMutation(
    MUTATION_ANSWER_QUESTION
  )

  const submitAnswer = ({ answer }) => {
    const input = {
      questionId: questionReceived.id,
      answer
    }

    answerQuestion({ variables: { input } })
  }

  const isSubmitDisabled =
    !questionReceived.id ||
    isQuestionAnswered(responseMutationAnswer.data, questionReceived)

  return (
    <>
      <QuizHeader title={questionReceived.title} />

      <ResponsiveImage
        className={styles.image}
        src={questionReceived.image}
        alt="F1 car"
      />

      <form className={styles.form} onSubmit={handleSubmit(submitAnswer)}>
        <Input.Group>
          <Label>Your Answer</Label>
          <Input disabled={isSubmitDisabled} name="answer" ref={register} />
        </Input.Group>
      </form>
    </>
  )
}

export default QuizQuestionContainer
