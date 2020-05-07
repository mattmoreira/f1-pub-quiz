import styles from 'styles/app.module.css'

import Color from 'color'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import Routes from 'config/Routes'

function App() {
  const containerStyle = useSpring({
    delay: 1900,
    from: { background: Color('#242333').alpha(0).string() },
    to: { background: '#242333' }
  })

  return (
    <main className={styles.app}>
      <animated.section className={styles.container} style={containerStyle}>
        <Routes />
      </animated.section>
    </main>
  )
}

export default App
