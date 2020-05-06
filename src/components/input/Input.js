import styles from 'styles/input.module.css'

import React from 'react'
import InputGroup from './InputGroup'

export default function Input(props) {
  return <input className={styles.input} {...props} />
}

Input.Group = InputGroup
