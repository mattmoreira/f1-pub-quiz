import styles from './quiz_team_detail.module.css'

import React from 'react'

import QuizLogo from '../shared/QuizLogo'
import QuizContainer from '../shared/QuizContainer'

function QuizTeamContainer() {
  const team = 'Scuderia Toro Rosso'

  return (
    <QuizContainer>
      <QuizLogo immediate />

      <div className={styles.race_info}>
        <p className={styles.race_countdown_description}>The winner is</p>
        <span className={styles.race_countdown}>{team}</span>
      </div>
    </QuizContainer>
  )
}

export default QuizTeamContainer
