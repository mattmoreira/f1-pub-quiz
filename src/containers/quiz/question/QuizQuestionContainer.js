import styles from './quiz_question.module.css'

import React from 'react'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import ResponsiveImage from 'components/responsiveImage/ResponsiveImage'

import QuizHeader from '../shared/QuizHeader'

function QuizQuestionContainer() {
  return (
    <>
      <QuizHeader number={1} title="Who was this driver's team mate?" />

      <ResponsiveImage
        className={styles.image}
        src="https://www.formula1.com/content/dam/fom-website/sutton/2018/Abu%20Dhabi%20Test/Day%20Two/dcd1828no673.jpg.transform/9col-retina/image.jpg"
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
