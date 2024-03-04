import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/46/28/82/462882194c8e5aa97c14d20e57aa22a9.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/da/9b/d2/da9bd2395314098078e8594fdef16fb0.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/d1/2e/66/d12e667b9de35f81186cefad2ffc9d9b.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/236x/e5/4b/7e/e54b7e86c766eff6ae714317e4a0a2c1.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/236x/c0/66/58/c0665860662bf303328348d666698127.jpg" alt="" />
            <p></p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/ef/c1/bd/efc1bdedee0ec12befee480c3d124ddc.jpg" alt="" />
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio