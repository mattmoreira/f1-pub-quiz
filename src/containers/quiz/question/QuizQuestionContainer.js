import styles from './quiz_question.module.css'

import React from 'react'
import { useSubscription } from '@apollo/react-hooks'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import ResponsiveImage from 'components/responsiveImage/ResponsiveImage'

import { SUBSCRIPTION_ADDED_MESSAGE } from 'queries/QuizQuestionQueries'

import QuizHeader from '../shared/QuizHeader'

const TITLE = {
  CAR_MODEL: 'Can you guess the car model?'
}

function QuizQuestionContainer() {
  const { data: { questionReceived = {} } = {} } = useSubscription(
    SUBSCRIPTION_ADDED_MESSAGE
  )

  const titleByType = TITLE[questionReceived.type]

  return (
    <>
      <QuizHeader number={1} title={titleByType} />

      <ResponsiveImage
        className={styles.image}
        src={questionReceived.image}
        alt="F1 car"
      />

      <form className={styles.form}>
        <Input.Group>
          <Label>Your Answer</Label>
          <Input />
        </Input.Group>
      </form>
    </>
  )
}

export default QuizQuestionContainer
