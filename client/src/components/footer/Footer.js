import React from 'react'

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <span className={styles.creator}>
        This challenge is a creation of{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.creator_profile}
          href="http://github.com/mattmoreira">
          @mattmoreira
        </a>
      </span>

      <span className={styles.copyright}>
        All brand and images used are intelectual property of{' '}
        <b>Formula One Digital Media Limited</b>, ALL RIGHTS RESERVED.
      </span>
    </footer>
  )
}
