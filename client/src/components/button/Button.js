import styles from 'styles/button.module.css'

import React from 'react'

const getClassNames = ({ center }) => {
  const classNames = [styles.button]

  if (center) {
    classNames.push(styles.button_center)
  }

  return classNames.join(' ')
}

export default function Button(props) {
  const className = getClassNames(props)

  return <button className={className} {...props} />
}
