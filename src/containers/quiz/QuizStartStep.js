import React from 'react'

import QuizLogo from './QuizLogo'
import { useHistory } from 'react-router'

export default function QuizStartStep() {
  const { push } = useHistory()

  const onAnimationEnd = () => push('/team')

  return <QuizLogo onAnimationEnd={onAnimationEnd} />
}
