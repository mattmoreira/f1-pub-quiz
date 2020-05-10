import styles from './quiz_team.module.css'

import React from 'react'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import Button from 'components/button/Button'

import QuizLogo from './QuizLogo'

function QuizTeamStep() {
  return (
    <>
      <QuizLogo immediate />

      <Input.Group className={styles.team_name}>
        <Label>What's your team name?</Label>
        <Input />
      </Input.Group>

      <Button center>I'm ready</Button>
    </>
  )
}

export default QuizTeamStep
