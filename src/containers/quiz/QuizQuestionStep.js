import styles from 'styles/quiz.module.css'

import React from 'react'

import Input from 'components/input/Input'
import Label from 'components/label/Label'

function QuizTeamStep() {
  return (
    <>
      <header className={styles.quiz_question_header}>
        <span className={styles.quiz_question_number}>1</span>
        <h1 className={styles.quiz_question_title}>
          Who was this driver's team mate?
        </h1>
      </header>

      <div className={styles.quiz_question_flexible_image}>
        <img
          className={styles.quiz_question_image}
          src="https://www.formula1.com/content/dam/fom-website/sutton/2018/Abu%20Dhabi%20Test/Day%20Two/dcd1828no673.jpg.transform/9col-retina/image.jpg"
          alt="F1 car"
        />
      </div>

      <form className={styles.quiz_question_form}>
        <Input.Group>
          <Label>Your Answer</Label>
          <Input />
        </Input.Group>
      </form>
    </>
  )
}

export default QuizTeamStep
