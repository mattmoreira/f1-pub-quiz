import styles from 'styles/quiz.module.css'

import React from 'react'

import QuizLogo from './QuizLogo'

export default function QuizContainer() {
  return (
    <section className={styles.container}>
      <QuizLogo />
    </section>
  )
}
