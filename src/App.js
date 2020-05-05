import styles from 'styles/app.module.css'

import React from 'react'

import QuizContainer from 'containers/quiz/QuizContainer'

function App() {
  return (
    <main className={styles.app}>
      <QuizContainer />
    </main>
  )
}

export default App
