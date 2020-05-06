import styles from 'styles/quiz.module.css'

import React from 'react'

import Input from 'components/input/Input'

import Label from 'components/label/Label'

export default function QuizTeamStep(props) {
  return (
    <Input.Group className={styles.quiz_team_step}>
      <Label>What's your team name?</Label>
      <Input />
    </Input.Group>
  )
}
