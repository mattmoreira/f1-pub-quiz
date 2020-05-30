import styles from './quiz_team_initial.module.css'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'

import Input from 'components/input/Input'
import Label from 'components/label/Label'
import Button from 'components/button/Button'

import QuizLogo from '../shared/QuizLogo'
import QuizContainer from '../shared/QuizContainer'

import { REGISTER_TEAM } from 'queries/QuizTeamQueries'

function QuizTeamContainer() {
  const { register, handleSubmit } = useForm()
  const [registerTeam] = useMutation(REGISTER_TEAM)

  const submitTeam = data => {
    const input = { name: data.teamName }
    registerTeam({ variables: { input } })
  }

  return (
    <QuizContainer>
      <QuizLogo immediate />

      <form className={styles.form} onSubmit={handleSubmit(submitTeam)}>
        <Input.Group className={styles.name}>
          <Label>What's your team name?</Label>
          <Input name="teamName" ref={register} />
        </Input.Group>

        <Button center type="submit">
          I'm ready
        </Button>
      </form>
    </QuizContainer>
  )
}

export default QuizTeamContainer
