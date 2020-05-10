import styles from './quiz_logo.module.css'

import React from 'react'
import { useSpring, animated } from 'react-spring'

import F1Logo from 'svgs/F1Logo'

function useLogoRested() {
  const logoStyle = useSpring({
    fill: '#2F2D3D',
    width: '310px',
    immediate: true
  })

  const titleStyle = useSpring({
    color: '#2F2D3D',
    marginTop: '22.5px',
    fontSize: '80px',
    immediate: true
  })

  return {
    logo: { style: logoStyle },
    title: { style: titleStyle }
  }
}

function useLogoAnimation({ onAnimationEnd }) {
  const logoStyle = useSpring({
    from: { width: '950px' },
    to: async next => {
      await next({ width: '380px' })
      await new Promise(resolve => setTimeout(resolve, 500))
      await next({ fill: '#2F2D3D', width: '310px' })
    },
    onRest: onAnimationEnd,
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

export default function QuizLogo(props) {
  const useLogo = props.immediate ? useLogoRested : useLogoAnimation

  const { title: titleAnimation, logo: logoAnimation } = useLogo(props)

  return (
    <div className={styles.container}>
      <F1Logo
        className={styles.formula_logo}
        immediate={props.immediate}
        {...logoAnimation}
      />

      <animated.h1 className={styles.title} {...titleAnimation}>
        <span ref={titleAnimation.ref}>Pub Quiz</span>
      </animated.h1>
    </div>
  )
}
