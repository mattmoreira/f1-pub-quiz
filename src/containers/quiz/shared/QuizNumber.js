import styles from './quiz_number.module.css'

import React from 'react'

export default function QuizNumber({ children }) {
  return <span className={styles.number}>{children}</span>
}
