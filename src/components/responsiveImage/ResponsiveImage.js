import styles from './responsive_image.module.css'

import React from 'react'

export default function ResponsiveImage(props) {
  return (
    <div className={styles.container}>
      <img alt={props.alt} {...props} />
    </div>
  )
}
