import styles from './quiz_team_initial.module.css'

import React from 'react'
import { useForm } from 'react-hook-form'

import { useAuthenticateTeam } from 'hooks/Team'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import Button from 'components/button/Button'

import QuizLogo from '../shared/QuizLogo'
import QuizContainer from '../shared/QuizContainer'

function QuizTeamContainer() {
  const authenticateTeam = useAuthenticateTeam()

  const { register, handleSubmit } = useForm()

  return (
    <QuizContainer>
      <QuizLogo immediate />

      <form className={styles.form} onSubmit={handleSubmit(authenticateTeam)}>
        <Input.Group className={styles.name}>
          <Label>What's your team name?</Label>
          <Input name="teamName" ref={register({ required: true })} />
        </Input.Group>

        <Button center type="submit">
          I'm ready
        </Button>
      </form>
    </QuizContainer>
  )
}

export default QuizTeamContainer
