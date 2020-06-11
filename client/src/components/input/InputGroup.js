import styles from 'styles/input.module.css'

import React from 'react'

export default function InputGroup({ className, ...props }) {
  const classNames = [styles.input_group, className].join(' ')

  return <div {...props} className={classNames} />
}
