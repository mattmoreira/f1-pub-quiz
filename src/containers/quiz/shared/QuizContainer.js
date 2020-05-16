import styles from './quiz_container.module.css'

import React from 'react'

export default function QuizContainer({ children }) {
  return <div className={styles.container}>{children}</div>
}
