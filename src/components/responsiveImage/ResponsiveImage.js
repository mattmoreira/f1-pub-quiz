import styles from './responsive_image.module.css'

import React from 'react'

const ResponsiveImage = ({ alt, src, ...props }) => (
  <div className={styles.container}>
    {Boolean(src) && <img alt={alt} src={src} {...props} />}
  </div>
)

export default ResponsiveImage
