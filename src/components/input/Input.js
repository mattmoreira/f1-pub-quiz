import styles from 'styles/input.module.css'

import React from 'react'

export default function Input(props) {
  return <input className={styles.input} {...props} />
}
