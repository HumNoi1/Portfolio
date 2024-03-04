import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="../src/components/Photo/IMG_6326.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="" alt="" />
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio