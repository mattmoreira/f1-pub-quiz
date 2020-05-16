import styles from './quiz_team_initial.module.css'

import React from 'react'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import Button from 'components/button/Button'

import QuizLogo from '../shared/QuizLogo'
import QuizContainer from '../shared/QuizContainer'

function QuizTeamContainer() {
  return (
    <QuizContainer>
      <QuizLogo immediate />

      <form className={styles.form}>
        <Input.Group className={styles.name}>
          <Label>What's your team name?</Label>
          <Input />
        </Input.Group>

        <Button center>I'm ready</Button>
      </form>
    </QuizContainer>
  )
}

export default QuizTeamContainer
