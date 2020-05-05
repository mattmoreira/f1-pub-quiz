import styles from 'styles/quiz.module.css'

import React, { useRef } from 'react'
import { useSpring, useChain, animated } from 'react-spring'

import F1Logo from 'svgs/F1Logo'

function useLogoAnimation() {
  const logoStyle = useSpring({
    from: { width: '950px' },
    to: { width: '380px', fill: '#2F2D3D' },
    delay: 500
  })

  const titleStyle = useSpring({
    delay: 1000,
    from: {
      height: 0,
      overflow: 'hidden',
      marginTop: '0px',
      opacity: 0,
      color: '#fff'
    },
    to: async next => {
      await next({ opacity: 1, height: 'auto', marginTop: '50px' })
      await new Promise(resolve => setTimeout(resolve, 150))
      await next({ color: '#2F2D3D' })
    }
  })

  // useChain([logoAnimationRef, titleAnimationRef], [1, 1.5])

  return {
    logo: { style: logoStyle },
    title: { style: titleStyle }
  }
}

export default function QuizLogo() {
  const { title: titleAnimation, logo: logoAnimation } = useLogoAnimation()

  console.log('titleAnimation', titleAnimation)

  return (
    <div className={styles.quiz_logo}>
      <F1Logo className={styles.formula_logo} {...logoAnimation} />

      <animated.h1 className={styles.title} style={titleAnimation.style}>
        <span ref={titleAnimation.ref}>Pub Quiz</span>
      </animated.h1>
    </div>
  )
}
