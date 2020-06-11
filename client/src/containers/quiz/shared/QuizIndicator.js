import styles from './quiz_indicator.module.css'

import React from 'react'

export default function QuizIndicator({ children }) {
  return <span className={styles.indicator}>{children}</span>
}
