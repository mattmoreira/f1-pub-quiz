import React from 'react'

import QuizLogo from './QuizLogo'
import { useHistory } from 'react-router'

export default function QuizStartContainer() {
  const { push } = useHistory()

  const onAnimationEnd = () => push('/team')

  return <QuizLogo onAnimationEnd={onAnimationEnd} />
}
