import styles from 'styles/app.module.css'

import Color from 'color'
import React from 'react'

import { useSpring, animated } from 'react-spring'

import Routes from 'config/Routes'

import Footer from './components/footer/Footer'

function App() {
  const isRootPath = window.location.pathname === '/'

  const containerStyle = useSpring({
    immediate: !isRootPath,
    delay: isRootPath ? 1900 : 0,
    from: { background: Color('#242333').alpha(0).string() },
    to: {
      background: '#242333',
      overflow: 'hidden'
    }
  })

  return (
    <main className={styles.app}>
      <animated.section className={styles.container} style={containerStyle}>
        <Routes />
      </animated.section>

      <Footer />
    </main>
  )
}

export default App
