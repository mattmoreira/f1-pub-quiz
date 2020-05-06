import styles from 'styles/quiz.module.css'

import React from 'react'
import { useSpring, animated } from 'react-spring'

import F1Logo from 'svgs/F1Logo'

function useLogoAnimation() {
  const logoStyle = useSpring({
    from: { width: '950px' },
    to: async next => {
      await next({ width: '380px' })
      await new Promise(resolve => setTimeout(resolve, 500))
      await next({ fill: '#2F2D3D', width: '310px' })
    },
    delay: 500
  })

  const titleStyle = useSpring({
    delay: 1000,
    from: {
      height: 0,
      overflow: 'hidden',
      marginTop: '0px',
      opacity: 0,
      color: '#fff',
      fontSize: '98px'
    },
    to: async next => {
      await next({ opacity: 1, height: 'auto', marginTop: '50px' })
      await next({ color: '#2F2D3D', marginTop: '22.5px', fontSize: '80px' })
    }
  })

  return {
    logo: { style: logoStyle },
    title: { style: titleStyle }
  }
}

export default function QuizLogo() {
  const { title: titleAnimation, logo: logoAnimation } = useLogoAnimation()

  return (
    <div className={styles.quiz_logo}>
      <F1Logo className={styles.formula_logo} {...logoAnimation} />

      <animated.h1 className={styles.title} {...titleAnimation}>
        <span ref={titleAnimation.ref}>Pub Quiz</span>
      </animated.h1>
    </div>
  )
}
