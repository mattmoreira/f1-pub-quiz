import styles from 'styles/quiz.module.css'

import React from 'react'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import Button from 'components/button/Button'

import QuizLogo from './QuizLogo'

function QuizTeamStep() {
  return (
    <>
      <QuizLogo immediate />

      <Input.Group className={styles.quiz_team_step}>
        <Label>What's your team name?</Label>
        <Input />
      </Input.Group>

      <Button center>I'm ready</Button>
    </>
  )
}

export default QuizTeamStep
