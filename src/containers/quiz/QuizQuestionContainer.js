import styles from './quiz_question.module.css'

import React from 'react'

import Input from 'components/input/Input'
import Label from 'components/label/Label'

function QuizQuestionContainer() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.number}>1</span>
        <h1 className={styles.title}>Who was this driver's team mate?</h1>
      </header>

      <div className={styles.flexible_image}>
        <img
          className={styles.image}
          src="https://www.formula1.com/content/dam/fom-website/sutton/2018/Abu%20Dhabi%20Test/Day%20Two/dcd1828no673.jpg.transform/9col-retina/image.jpg"
          alt="F1 car"
        />
      </div>

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
