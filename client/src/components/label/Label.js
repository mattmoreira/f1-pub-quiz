import styles from 'styles/label.module.css'

import React from 'react'

export default function Label(props) {
  return <label className={styles.label} {...props} />
}
