import styles from './quiz_team_ready.module.css'

import React from 'react'

import QuizLogo from '../shared/QuizLogo'
import QuizContainer from '../shared/QuizContainer'

function QuizTeamContainer() {
  return (
    <QuizContainer>
      <QuizLogo immediate />

      <div className={styles.race_info}>
        <p className={styles.race_countdown_description}>
          The next race starts in
        </p>
        <span className={styles.race_countdown}>00:00:20</span>
      </div>
    </QuizContainer>
  )
}

export default QuizTeamContainer
