import styles from './quiz_header.module.css'

import QuizNumber from './QuizNumber'

import React from 'react'

export default function QuizHeader({ title, number }) {
  return (
    <header className={styles.header}>
      <QuizNumber>{number}</QuizNumber>
      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}
