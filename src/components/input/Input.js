import styles from 'styles/input.module.css'

import React from 'react'
import InputGroup from './InputGroup'

const Input = React.forwardRef((props, ref) => (
  <input ref={ref} className={styles.input} {...props} />
))

Input.Group = InputGroup

export default Input
