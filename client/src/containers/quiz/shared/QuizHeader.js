import styles from './quiz_header.module.css'

import QuizIndicator from './QuizIndicator'

import React from 'react'

export default function QuizHeader({ title, progress }) {
  return (
    <header className={styles.header}>
      <QuizIndicator>?</QuizIndicator>
      {title && <h1 className={styles.title}>{title}</h1>}

      {progress && (
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}></div>
      )}
    </header>
  )
}
