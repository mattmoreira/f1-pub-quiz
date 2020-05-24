import styles from './quiz_question.module.css'

import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import ResponsiveImage from 'components/responsiveImage/ResponsiveImage'

import { GET_RANDOM_CAR } from 'queries/QuizQuestionQueries'

import QuizHeader from '../shared/QuizHeader'

function QuizQuestionContainer() {
  const { data: { randomCar = {} } = {} } = useQuery(GET_RANDOM_CAR)

  return (
    <>
      <QuizHeader number={1} title="Can you guess the car model?" />

      <ResponsiveImage
        className={styles.image}
        src={randomCar.image}
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
