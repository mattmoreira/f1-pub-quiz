import styles from 'styles/quiz.module.css'

import React from 'react'

import F1Logo from 'svgs/F1Logo'

export default function QuizLogo() {
  return (
    <div>
      <F1Logo className={styles.formula_logo} />

      <h1 className={styles.title}>Pub Quiz</h1>
    </div>
  )
}
