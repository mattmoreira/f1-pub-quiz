import React from 'react'

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <span className={styles.creator}>
        This challenge is a creation of <b>@mattmoreira</b>
      </span>

      <span className={styles.copyright}>
        All brand and images used are intelectual property of{' '}
        <b>Formula One Digital Media Limited</b>, ALL RIGHTS RESERVED.
      </span>
    </footer>
  )
}
