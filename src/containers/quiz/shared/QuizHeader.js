import styles from './quiz_header.module.css'

import QuizNumber from './QuizNumber'

import React from 'react'

export default function QuizHeader({ title, number }) {
  return (
    <header className={styles.header}>
      {number && <QuizNumber>{number}</QuizNumber>}
      {title && <h1 className={styles.title}>{title}</h1>}
    </header>
  )
}
