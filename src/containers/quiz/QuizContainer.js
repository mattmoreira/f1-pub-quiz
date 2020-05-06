import styles from 'styles/quiz.module.css'

import React from 'react'
import Color from 'color'

import { useSpring, animated } from 'react-spring'

import Input from 'components/input/Input'

import QuizLogo from './QuizLogo'

export default function QuizContainer() {
  const containerStyle = useSpring({
    delay: 1900,
    from: { background: Color('#242333').alpha(0).string() },
    to: { background: '#242333' }
  })

  return (
    <animated.section className={styles.container} style={containerStyle}>
      <QuizLogo />
      <Input />
    </animated.section>
  )
}
