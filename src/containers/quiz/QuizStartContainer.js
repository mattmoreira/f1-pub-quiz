import React from 'react'

import QuizLogo from './shared/QuizLogo'
import QuizContainer from './shared/QuizContainer'

import { useHistory } from 'react-router'

export default function QuizStartContainer() {
  const { push } = useHistory()

  const onAnimationEnd = () => push('/team')

  return (
    <QuizContainer>
      <QuizLogo onAnimationEnd={onAnimationEnd} />
    </QuizContainer>
  )
}
